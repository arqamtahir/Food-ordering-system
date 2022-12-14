class GroupItemsController < ApplicationController
  before_action :set_group_item, only: [:show, :edit, :update, :destroy, :restore]
  before_action :permit_params, only: [:update, :create]

    def index
      @q = GroupItem.ransack(params[:q])
      @group_items = @q.result(distinct: true).kept

      if params[:q].blank?
        @group_items = @q.result(distinct: true).available.kept
      end
    end

    def show
      @options = @group_item.options
    end

    def new
      @addons = []
			@group_item=GroupItem.new
      Addon.all.map{ |addon| @addons << { addon_id: addon.id}}
      @group_item.addon_items.build( @addons.map { |addon| addon})
    end

    def edit
      @addons = []
      Addon.all.map do |addon|
        if !(@group_item.addon_items.exists?(addon_id: addon.id))
          @addons << {addon_id: addon.id}
        end
      end

      @group_item.addon_items.build( @addons.map { |addon| addon })
    end

    def create
			@group_item=GroupItem.new(permit_params)
			
      if @group_item.save
        flash[:notice] = "group_item created successfully"
        redirect_to group_items_path
      else
        flash[:alert] = "Therer is some issue group_item not created"
        render :new
			end

    end

    def update
			if @group_item.update(permit_params)
        flash[:notice] = "group_item updated successfully"
        redirect_to group_items_path(@group_item)
      else
        flash[:alert] = "Therer is some issue group_item not updated"
        render :action => "show"
      end
    end

    def destroy
      if @group_item.discarded?
        flash[:notice] = "group_item deleted successfully"
        redirect_to group_items_path
      elsif @group_item.discard
        flash[:notice] = "group_item has been moved to recycle Bin, successfully"
        redirect_to group_items_path
      else
        flash[:alert] = "Therer is some issue group_item not deleted"
        render :action => "index"
      end
    end

    def restore
      if  @group_item.undiscard
        flash[:notice] = "GroupItem has been restore, successfully"
        redirect_to group_items_path(@group_item)
      else
        flash[:alert] = "There is some issues, GroupItem not restored "
        redirect_to group_items_path(@group_item)
      end
    end

    def discarded
      @q = GroupItem.ransack(params[:q])
      @group_items = @q.result(distinct: true).discarded
    end

    private

    def set_group_item
      @group_item=GroupItem.find(params[:id])
    end

    def permit_params
      params.require(:group_item).permit(
        :name,
        :description,
        :post_status,
        options_attributes: [
          :id, 
          :name,
          :group_item_id,
          :_destroy],
        addon_items_attributes: [
          :id,
          :addon_itemable_id,
          :addon_itemable_type,
          :addon_id,
          :_destroy ])
    end
end

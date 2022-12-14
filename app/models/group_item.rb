class GroupItem < ApplicationRecord
    include Discard::Model

    included Availability

    has_many :options , inverse_of: :group_item, dependent: :destroy
    has_many :deal_items,as: :deal_itemable
    has_many :menu_items,as: :menu_itemable
    has_many :food_items
    has_many :addon_items, as: :addon_itemable
    accepts_nested_attributes_for :options, reject_if: :all_blank, allow_destroy: true
    accepts_nested_attributes_for :addon_items, allow_destroy: true

    enum post_status: { available: 1,  unavailable: 2 }

    def self.ransackable_scopes(auth_object = nil)
	    %i(available unavailable)
    end
end

class AddReferenceToPayment < ActiveRecord::Migration[6.1]
  def change
    add_reference :payments, :order, null: false, foreign_key: true
  end
end

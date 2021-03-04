class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :number
      t.string :status

      t.timestamps
    end
    #belongs_to user
    # create_table :users do |t|
    #   t.belongs_to :order
    #   t.integer :order_id
    #   t.integer :user_id 
    # end
    #transaction has_one :order :through => :user 
    #includes transaction, order and through table here 
    create_table: transactions do |t|
      t.integer :transaction_id
      t.timestamps
    end

    #add an index to speed queries up
    #add_index(:orders_users, [:order_id, :user_id])
  end
end

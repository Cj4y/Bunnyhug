class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :number
      seller_id
      buyer_id
      t.timestamps
    end
    #transaction belongs_to order
    create_table :orders do |t|
      t.belongs_to :transaction
	    #t.datetime :created_at
	    t.timestamps
    end
    
  end
end

class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :password_digest
      t.string :payment_info
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :address
      

      t.timestamps
    end
    #has_one user
    create_table :users do |t|
      t.belongs_to :account
      t.integer :user_id
      t.datetime :created_at
      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[6.0]
  def change #5 associations
    create_table :users do |t|
      t.string :user_name
      t.string :location
      t.text :self_description
      t.string :preferred_styles
      t.integer :account_id
      t.integer :listing_id
      

      t.timestamps
    end

    add_index :users, :account_id
    add_index :users, :listing_id 

    #user belongs_to account
    create_table :users do |t|
      t.belongs_to :account
	    t.datetime :created_at
	    t.timestamps
    end

    
    #adding a join table for our 
    #has_and_belongs_to_many relationship
    #model order needs to be alphabetical 
    create_join_table :orders, :users do |t|
      t.integer :order_id
      t.integer :user_id
      t.datetime :created_at
    end
    create_join_table :listings, :users do |t|
      t.integer :listing_id
      t.integer :user_id
      t.datetime :created_at
    end
    creat_join__table :star_ratings, :users do |t|
      t.integer :star_rating_id
      t.integer :user_id
      t.datetime :created_at
    end
    create_join_table :favourites, :users do |t|
      t.integer :favourite_id
      t.integer :user_id
    end
    #add indexes to speed up
    add_index(:orders_users, [:order_id, :user_id])
    add_index(:listings_users, [:listing_id, :user_id])
    add_index(:star_ratings_users, [:star_rating_id, :user_id])
    add_index(:favourites_users, [:favourite_id, :user_id])
  end
end

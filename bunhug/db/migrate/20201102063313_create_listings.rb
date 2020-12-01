class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :categories
      t.integer :price, precision: 8, scale: 2
      t.string :photos
      t.text :details
      t.boolean :flagged
      t.integer :favourites #number of people who favd it
      t.integer :user_id
      t.integer :favourite_id #able to find items by favourite

      t.timestamps
    end

    #listing belongs_to user
    create_table :users do |t|
      t.belongs_to :user
	    t.datetime :created_at
	    t.timestamps
    end

    #has_abtm listing displays
    create_join_table :listing_displays, :listings do |t|
      t.integer :listing_display_id
      t.integer :listing_id
      t.datetime :created_at
      t.timestamps
    end
    #has_one transaction
    create_table :transactions do |t|
      t.belongs_to :listing
      t.integer :transaction_id
      t.datetime :created_at
      t.timestamps
    end
    #has_many favourites
    create_table :favourites do |t|
      t.belongs_to :listing
      t.integer :favourite_id
      t.datetime :created_at
      t.timestamps
    end

    add_index :listings, :user_id
    add_index :listings, :favourite_id
  end
end

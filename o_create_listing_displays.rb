class CreateListingDisplays < ActiveRecord::Migration[6.0]
  def change
    create_table :listing_displays do |t|

      t.timestamps
    end
    #has_abtm listings 
    create_join_table :listings, :listing_displays do |t|
      t.integer :listing_id
      t.integer :listing_display_id
      #t.datetime :created_at
      t.timestamps
    end
  end
end


class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :category
      t.string :image_url
      t.text :details
      t.boolean :active, default: true
      t.boolean :flagged, default: false
      t.string :colour
      t.decimal :price, precision: 8, scale: 2

      t.timestamps
    end
  end
end

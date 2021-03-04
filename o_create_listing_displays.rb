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

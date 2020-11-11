class CreateFavourites < ActiveRecord::Migration[6.0]
  def change
    create_table :favourites do |t|
      t.boolean :selected
      t.integer :favourite_id

      t.timestamps
    end
    #has_abtm listing displays
    create_join_table :users, :favourites do |t|
      t.integer :user_id
      t.integer :favourite_id
      t.datetime :created_at
      t.timestamps
    end
  end
end

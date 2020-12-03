class CreateListings < ActiveRecord::Migration[6.0]
  def change
    
    create_table :listings do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
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
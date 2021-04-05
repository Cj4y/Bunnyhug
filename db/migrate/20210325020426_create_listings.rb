class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :slug
      t.string :category
      t.string :image_url
      t.text :details
      t.boolean :active
      t.boolean :flagged
      t.string :colour
      t.decimal :price, precision: 8, scale: 2

      t.timestamps
    end
  end
end

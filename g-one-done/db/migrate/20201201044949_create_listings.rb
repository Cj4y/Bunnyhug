class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :category
      t.string :photos
      t.text :details
      t.string :colour
      t.decimal :price, precision: 8, scale: 2

      t.timestamps
    end
  end
end

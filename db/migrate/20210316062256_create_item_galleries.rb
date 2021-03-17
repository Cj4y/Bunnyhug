class CreateItemGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :item_galleries do |t|
      t.string :filters
      t.references :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end

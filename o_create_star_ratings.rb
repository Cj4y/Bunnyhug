class CreateStarRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :star_ratings do |t|
      t.integer :buyer_id
      t.integer :seller_id
      t.integar :stars
      t.text :review
      t.string :metric
      t.timestamps
    end
    #has_abtm user
    # create_join_table :users, :star_ratings do |t|
    #   t.integer :user_id
    #   t.integer :star_rating_id
    #   #t.datetime :created_at
    #   t.timestamps
    # end
  end
end

class Listing < ApplicationRecord

  belongs_to :user #foreign key
  has_and_belongs_to_many :listing_displays
  has_one :transaction
  has_many :favourites  
  #has_and_belongs_to_many :sugg_listings
    #has_and_belongs_to_many :sugg_collection_sellers
end

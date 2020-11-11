class User < ApplicationRecord
    belongs_to :account
    
    has_and_belongs_to_many :orders
    has_and_belongs_to_many :listings
    has_and_belongs_to_many :star_ratings
    has_and_belongs_to_many :favourites

end

class ListingDisplay < ApplicationRecord
    has_one_and_belongs_to_many :listings
end

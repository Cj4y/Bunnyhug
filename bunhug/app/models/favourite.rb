class Favourite < ApplicationRecord
    has_and_belongs_to_many :users
    has_one :listing 
end

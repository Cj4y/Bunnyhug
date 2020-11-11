class StarRating < ApplicationRecord
    has_one_and_belongs_to_many :user
end

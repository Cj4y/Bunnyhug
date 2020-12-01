class Listing < ApplicationRecord
    validates :title, :category, :details, :photos, :colour, presence: true
    validates :title, uniqueness: true
    validates :photos, allow_blank: true, format: {
    with: %r{\.(gif|jpg|png)\z}i,
    message: 'URL for GIF, JPG or PNG image required.'
    }
    validates :price, numericality: { greater_than_or_equal_to: 0.01 }
end

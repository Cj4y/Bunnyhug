class Listing < ApplicationRecord
  #show most recent listings
  default_scope { order(created_at: :desc) }
  
  belongs_to :user
  #validates :title, presense: true# :category, :details, :image_url, :colour, :price, presence: true
  #validates :title, uniqueness: true
  # validates :image_url, allow_blank: true, format: {
  #   with: %r{\.(gif|jpg|png)\z}i,
  #   message: 'URL for GIF, JPG or PNG image required.'
  # }
 #validates :price, numericality: { greater_than_or_equal_to: 0.01 }
end

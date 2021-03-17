class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  #associations for user
  has_many :listings, dependent: :destroy
  #TODO
  #has_many :listingsfavs, through: :favorites
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  #def favorite(concert)
  #  favorites.find_by(concert_id: concert.id)
  #end
  
end

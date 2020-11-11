class Transaction < ApplicationRecord
    belongs_to :order_info
    has_one :user, through :order_info
    has_many :listings
    
end

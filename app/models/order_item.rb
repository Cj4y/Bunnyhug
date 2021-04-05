class OrderItem < ApplicationRecord
  #order_items are children of rows in cart and listings
  belongs_to :listing
  belongs_to :cart
end

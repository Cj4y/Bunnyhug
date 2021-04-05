class Cart < ApplicationRecord
    #delete order_items when cart is destroyed
    has_many :order_items, dependent: :destroy

    def add_listing_to_cart(listing)
        current_item = order_items.find_by(listing_id: listing.id)
        if current_item
            break
            # write that item is already in cart
        else
            current_item = order_items.build(listing_id: listing.id)
        end
        current_item
    end
end

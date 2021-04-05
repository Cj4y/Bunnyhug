module CurrentCart

    # grab :cart_id from current session by id
    # private as it is not available as an action
    private
    def set_cart
        @cart = Cart.find(session[:cart_id])
        # if cart is not found, create a new one
        rescue ActiveRecord::RecordNotFound
        @cart = Cart.create
        session[:cart_id] = @cart.id
    end
end

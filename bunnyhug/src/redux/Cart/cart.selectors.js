// use reselect dependency for complex redux selectors
import { createSelector } from 'reselect';


export const selectCartData = state => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  //store cart items array in selector
  cartData => cartData.cartItems
);


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      //get quantity of all items in cart
      (quantity, cartItem) =>
        quantity + cartItem.quantity
      , 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity * cartItem.productPrice,
        //default value of zero
    0)
);
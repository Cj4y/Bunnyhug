import { types } from './../../actions/types';
import cartReducer from './cart.reducer';

describe('User Reducer', () => {

    it('Should return default state', () => {
        const newState = cartReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const cart = [{ cartItems: 'Test 1', password: 't1'}, { cartItems: 'Test 2', password: 't2'}, { cartItems: 'Test 3', password: 't3'}];
        const newState = cartReducer(undefined, {
            type: types.ADD_TO_CART,
            payload: cart
        });
        expect(newState).toEqual(cart);

    });

    it('Should return new state if receiving type', () => {
        const cart = [{ cartItems: 'Test 1'}, { cartItems: 'Test 2'}, { cartItems: 'Test 3'}];
        const newState = cartReducer(undefined, {
            type: types.REDUCE_CART_ITEM,
            payload: cart
        });
        expect(newState).toEqual(cart);

    });

    it('Should return new state if receiving type', () => {
        const cart = [{ cartItems: 'Test 1'}, { cartItems: 'Test 2'}, { cartItems: 'Test 3'}];
        const newState = cartReducer(undefined, {
            type: types.REMOVE_CART_ITEM,
            payload: cart
        });
        expect(newState).toEqual(cart);
    });
    it('Should return new state if receiving type', () => {
        const cart = [{ cartItems: 'Test 1'}, { cartItems: 'Test 2'}, { cartItems: 'Test 3'}];
        const newState = cartReducer(undefined, {
            type: types.CLEAR_CART,
        });
        expect(newState).toEqual(cart);
    });
});

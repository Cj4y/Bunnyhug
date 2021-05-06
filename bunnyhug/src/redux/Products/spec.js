import { types } from './../../actions/types';
import productsReducer from './products.reducer';

describe('Products Reducer', () => {

    it('Should return default state', () => {
        const newState = productsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const products = [{ category: 'mens', test: ''}, { category: 'mens', test: '1'}, ];
        const newState = productsReducer(undefined, {
            type: types.SET_PRODUCT,
            payload: products
        });
        expect(newState).toEqual(products);

    });

    it('Should return new state if receiving type', () => {
        const products = [{ test: 'Test 1'}, { test: 'Test 2'}, { test: 'Test 3'}];
        const newState = productsReducer(undefined, {
            type: types.SET_PRODUCTS,
            payload: products
        });
        expect(newState).toEqual(products);

    });
});

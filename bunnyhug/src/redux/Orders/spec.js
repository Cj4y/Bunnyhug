import { types } from './../../actions/types';
import ordersReducer from './orders.reducer';

describe('Orders Reducer', () => {

    it('Should return default state', () => {
        const newState = ordersReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const orders = [{ orderHistory: 'test1'}, { orderHistory: 'test2'}, ];
        const newState = ordersReducer(undefined, {
            type: types.SET_USER_ORDER_HISOTRY,
            payload: orders
        });
        expect(newState).toEqual(orders);

    });

    it('Should return new state if receiving type', () => {
        const orders = [{ orderDetails: '1'}, {orderDetails: '2'}, ];
        const newState = ordersReducer(undefined, {
            type: types.SET_ORDER_DETAILS,
            payload: orders
        });
        expect(newState).toEqual(orders);

    });
});

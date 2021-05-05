//configure the root reducer for all sub reducers
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//add reducer for user
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import ordersReducer from './Orders/orders.reducer';

//combine all reducers
export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData']
};

export default persistReducer(configStorage, rootReducer);

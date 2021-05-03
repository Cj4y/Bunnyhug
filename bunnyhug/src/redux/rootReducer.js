//configure the root reducer for all sub reducers
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//add reducer for user
import userReducer from './User/user.reducer';

//combine all reducers
export const rootReducer = combineReducers({
  user: userReducer,
  //productsData: productsReducer
});

export default persistReducer(rootReducer);

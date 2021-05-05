import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas';
import ordersSagas from './Orders/orders.sagas';

import productsSagas from './Products/products.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(ordersSagas),
  ])
}
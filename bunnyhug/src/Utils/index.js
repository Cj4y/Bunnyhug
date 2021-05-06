import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../redux/rootReducer';
import { middlewares } from './../redux/createStore';



export const checkUserIsAdmin = currentUser => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  //if (userRoles.includes('admin'))
  return true;

  //return false;
}

//create instance of api
export const apiInstance = axios.create({
  baseURL: 'https://us-central1-bunnyhug-f68c7.cloudfunctions.net/api'
});


//utils for testing
export const findByTestAttr=(component, attr)=>{
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

//test props
// export const checkProps = (component, expectedProps) => {
//   const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//   return propsErr;
// };

//test reducers, actions
//test store
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
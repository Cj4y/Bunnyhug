import axios from 'axios';

export const checkUserIsAdmin = currentUser => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  //if (userRoles.includes('admin'))
  return true;

  //return false;
}

//create instance of api
export const apiInstance = axios.create({
  baseURL: ''
});


//utils for testing
exportc const findByTestAttr=(component, attr)=>{
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}


import userTypes from './user.types';

//set initial user state
const INITIAL_STATE = {
  currentUser: null,
  resetPasswordSuccess: false,
  userErr: []
};

//create user reducer that accepts state and action
const userReducer = (state = INITIAL_STATE, action) => {
  //four possibilites of type
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: []
      }
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload
      }
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload
      }
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    default:
      return state;
  }
};

export default userReducer;
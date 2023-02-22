import * as ActionType from './actions/ActionTypes';
const initState = {
  // TODO what i want to store it to use it (globally) in the app
  // ! NEED TO STORE Token AND user data
  token: '',
  user: null,
  isSigningIn: false,
  signInSuccess: null,
  signInFailure: null,
  isConfirmCode: false,
  confirmCodeSuccess: null,
  confirmCodeFailure: null,
};
// ? to create reducer and passing state and action in params
const authReducer = (state = initState, action) => {
  // ? when dispatch action to reducer the action type get here and return new state with update
  switch (action.type) {
    case ActionType.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ActionType.SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case ActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        signInSuccess: {}, // ? why object because every time return a different location if it change
        // ! because if we do 2 requests in the same time and the result the same string , it doesn't know about this change
      };
    case ActionType.SIGNIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        signInFailure: {},
      };
    case ActionType.CONFIRM_CODE_START:
      return {
        ...state,
        isConfirmCode: true,
      };
    case ActionType.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        isConfirmCode: false,
        confirmCodeSuccess: {}, // ? why object because every time return a different location if it change
        // ! because if we do 2 requests in the same time and the result the same string , it doesn't know about this change
      };
    case ActionType.SIGNIN_FAILURE:
      return {
        ...state,
        isConfirmCode: false,
        confirmCodeFailure: {},
      };
    default:
      return state;
  }
};

export default authReducer;

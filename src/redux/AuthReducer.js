const initState = {
  // TODO what i want to store it to use it (globally) in the app
  // ! NEED TO STORE Token AND user data
  token: '',
  user: null,
};
// ? to create reducer and passing state and action in params
const authReducer = (state = initState, action) => {
  // ? when dispatch action to reducer the action type get here and return new state with update
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;

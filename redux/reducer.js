const initialState = {
  email: '',
  password: '',
};

export default loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN": 
      return{
        ...state,
        email: state.email,
        password: state.password,
      };
    default:
      return state;
  }
}
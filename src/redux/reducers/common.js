import ActionTypes from '../actions/actionTypes';
// const userId = window.sessionStorage.getItem('userId')
const initialState = {
  isloading: false,
  isLogin: false,
  userInfo: null,
  isRegister: false
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_START:
      return {
        ...state,
        isloading: true,
      };
    case ActionTypes.LOADING_END:
      return {
        ...state,
        isloading: false,
      };
    case ActionTypes.CHECK_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case ActionTypes.CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case ActionTypes.GOTO_REGISTER_PAGE:
      return {
        ...state,
        isRegister: true,
      };
    case ActionTypes.GOTO_LOGIN_PAGE:
      return {
        ...state,
        isRegister: false,
      };
    default:
      return state
  }
}





export default commonReducer;
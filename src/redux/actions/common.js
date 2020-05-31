import ActionsTypes from './actionTypes';

export function startLoading() {
  return {
    type: ActionsTypes.LOADING_START,
  }
}

export function endLoading() {
  return {
    type: ActionsTypes.LOADING_END,
  }
}

export function loginSuccess() {
  return {
    type: ActionsTypes.CHECK_LOGIN_SUCCESS,
  }
}

export function loginFailure() {
  return {
    type: ActionsTypes.CHECK_LOGIN_FAILURE,
  }
}

export function gotoRegister() {
  return {
    type: ActionsTypes.GOTO_REGISTER_PAGE
  }
}

export function gotoLogin() {
  return {
    type: ActionsTypes.GOTO_LOGIN_PAGE
  }
}

export function verifyLogin() {
  return {
    type: ActionsTypes.VERIFY_LOGIN_STATUS
  }
}



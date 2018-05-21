import * as Actions from './constants';

/**
 * Login with email and password action
 * @param email
 * @param password
 * @param remember
 * @returns {{type, payload: {email: *, password: *, remember: boolean}}}
 */
export function login(email, password, remember = true) {
  return {
    type: Actions.LOGIN_EMAIL_REQUEST,
    payload: {
      email, password, remember,
    },
  };
}

/**
 * Login success action
 * @param user
 * @returns {{type, payload: {user: *}}}
 */
export function loginSuccess(user) {
  return {
    type: Actions.LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

/**
 * Login error action
 * @param error
 * @returns {{type, payload: {error: *}}}
 */
export function loginError(error) {
  return {
    type: Actions.LOGIN_ERROR,
    payload: {
      error,
    },
  };
}

/**
 * register with email and password action
 * @param email
 * @param password
 * @param remember
 * @returns {{type, payload: {email: *, password: *, remember: *}}}
 */
export function register(email, password, remember) {
  return {
    type: Actions.SIGN_UP_REQUEST,
    payload: {
      email, password, remember,
    },
  };
}

/**
 * Logout action
 * @returns {{type}}
 */
export function logout() {
  return {
    type: Actions.LOGOUT,
  };
}

/**
 * Login with Facebook
 * @param token
 * @returns {{type, payload: {token: *}}}
 */
export function loginWithFacebook(token: string): Object {
  return {
    type: Actions.LOGIN_WITH_FACEBOOK,
    payload: {
      token,
    },
  };
}

/**
 * Login with Google
 * @param idToken
 * @param accessToken
 * @returns {{type, payload: {idToken: *, accessToken: *}}}
 */
export function loginWithGoogle(idToken, accessToken) {
  return {
    type: Actions.LOGIN_WITH_GOOGLE,
    payload: {
      idToken,
      accessToken,
    },
  };
}

/**
 * Reset password request
 * @param email
 * @returns {{type, payload: {email: *}}}
 */
export function forgotPasswordRequest(email) {
  return {
    type: Actions.FORGOT_PASSWORD_REQUEST,
    payload: {
      email,
    },
  };
}

/**
 * Add persion detail
 * @param data
 * @returns {{type, payload: {data: *}}}
 */
export function addPersonDetail(data) {
  return {
    type: Actions.ADD_PERSON_DETAIL_REQUEST,
    payload: { data },
  };
}

/**
 * Set password
 * @param password
 * @returns {{type, payload: {password: *}}}
 */
export function setPassword(password) {
  return {
    type: Actions.SET_PASSWORD_REQUEST,
    payload: { password },
  };
}


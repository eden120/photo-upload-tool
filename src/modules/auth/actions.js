import * as Actions from './constants';

/**
 * Login with email and password action
 * @param email
 * @param password
 * @param remember
 * @returns {{type: string, payload: {email: *, password: *, remember: boolean}}}
 */
export function login({email, password, remember = true}) {
  return {
    type: Actions.LOGIN_EMAIL_REQUEST,
    payload: {
      email, password, remember,
    },
  };
}

/**
 * Register
 * @param info
 * @returns {{type: string, payload: *}}
 */
export function register(info) {
  return {
    type: Actions.SIGN_UP_REQUEST,
    payload: info,
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



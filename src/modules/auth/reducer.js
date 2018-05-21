import { fromJS } from 'immutable';
import * as Actions from './constants';

const initState = fromJS({
  loading: false,
  isLogin: false,
  user: {},
  error: {},
  signUpError: {},

  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
  forgotPasswordError: {},

  addPersonLoading: false,
  addPersonSuccess: false,
  addPersonError: {},

  setPasswordLoading: false,
  setPasswordError: {},
});

export default function authReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.LOGIN_WITH_GOOGLE:
    case Actions.LOGIN_WITH_FACEBOOK:
    case Actions.LOGIN_EMAIL_REQUEST:
    case Actions.SIGN_UP_REQUEST:
      return state.set('loading', true);
    case Actions.SIGN_UP_ERROR:
      return state
        .set('loading', false)
        .set('signUpError', action.payload.error);
    case Actions.LOGIN_SUCCESS:
      return state.merge({
        loading: false,
        isLogin: true,
        user: action.payload.user,
      });
    case Actions.LOGIN_ERROR:
      return state.merge({
        loading: false,
        isLogin: false,
        error: action.payload.error,
      });
    case Actions.FORGOT_PASSWORD_REQUEST:
      return state.set('forgotPasswordLoading', true);
    case Actions.FORGOT_PASSWORD_SUCCESS:
      return state
        .set('forgotPasswordLoading', false)
        .set('forgotPasswordSuccess', true);
    case Actions.FORGOT_PASSWORD_ERROR:
      return state
        .set('forgotPasswordLoading', false)
        .set('forgotPasswordError', action.payload.error);
    case Actions.ADD_PERSON_DETAIL_REQUEST:
      return state.set('addPersonLoading', true);
    case Actions.ADD_PERSON_DETAIL_SUCCESS:
      return state
        .set('addPersonLoading', false)
        .set('addPersonSuccess', true);
    case Actions.ADD_PERSON_DETAIL_ERROR:
      return state
        .set('addPersonLoading', false)
        .set('addPersonError', action.payload.error);
    case Actions.SET_PASSWORD_REQUEST:
      return state
        .set('setPasswordLoading', true);
    case Actions.SET_PASSWORD_ERROR:
      return state
        .set('setPasswordLoading', false)
        .set('setPasswordError', action.payload.error);
    case Actions.LOGOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
}

import authSaga from './saga';
import authReducer from './reducer';
import {
  login,
  logout,
  register,
  loginWithFacebook,
  loginWithGoogle,
  forgotPasswordRequest,
  addPersonDetail,
  setPassword,
} from './actions';
import { makeSelectAuth } from './selections';

export {
  authSaga,
  authReducer,
  login,
  logout,
  register,
  loginWithFacebook,
  loginWithGoogle,
  forgotPasswordRequest,
  addPersonDetail,
  makeSelectAuth,
  setPassword,
};

import {call, put, takeLatest, select} from 'redux-saga/effects';
import * as Actions from './constants';
import {signIn} from '../../firebase';
import {LOGIN_SUCCESS} from "./constants";
import {LOGIN_ERROR} from "./constants";

export function* signInSaga({payload}) {
  const {email, password, remember} = payload;
  try {
    const user = yield call(signIn, email, password, remember);
    yield put({type: LOGIN_SUCCESS, payload: {user}});
  } catch (error) {
    yield put({type: LOGIN_ERROR, payload: {error}});
  }
}

export function* signUpSaga({payload}) {
  // const { email, password } = payload;
  // try {
  //   const user = yield call(signUp, email, password);
  //   yield put(loginSuccess(user));
  //   yield put(redirectToMoreInfoScreen());
  // } catch (error) {
  //   yield put({ type: Actions.SIGN_UP_ERROR, payload: { error } });
  // }
}

export function* logOut() {
  // try {
  //   yield call(signOut);
  //   yield put({ type: Actions.LOGOUT_SUCCESS });
  // } catch (error) {
  //   yield put({ type: 'LOUT_OUT_ERROR' });
  // }
}

export default function* authSaga() {
  yield takeLatest(Actions.LOGIN_EMAIL_REQUEST, signInSaga);
  yield takeLatest(Actions.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(Actions.LOGOUT, logOut);
}

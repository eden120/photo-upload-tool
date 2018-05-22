import {call, put, takeLatest} from 'redux-saga/effects';
import * as Actions from './constants';
import {signIn, signOut, signUp, setDocument} from '../../firebase';
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
  console.log(payload, 'payload');
  const {email, password, name, type} = payload;
  try {
    const user = yield call(signUp, email, password);
    // Set data for user
    const data = type === "creator" ? {name, email, type, isCreatorActive: false} : {name, email, type};
    yield call(setDocument, 'users', user.uid, data);
    yield put({type: LOGIN_SUCCESS, payload: {user}});
  } catch (error) {
    yield put({type: Actions.SIGN_UP_ERROR, payload: {error}});
  }
}

export function* logOut() {
  try {
    yield call(signOut);
    yield put({type: Actions.LOGOUT_SUCCESS});
  } catch (error) {
    yield put({type: 'LOUT_OUT_ERROR'});
  }
}

export default function* authSaga() {
  yield takeLatest(Actions.LOGIN_EMAIL_REQUEST, signInSaga);
  yield takeLatest(Actions.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(Actions.LOGOUT, logOut);
}

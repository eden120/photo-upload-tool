import { all } from 'redux-saga/effects';
import { authSaga } from './modules/auth';

export default function* rootSagas() {
  yield all([
    authSaga(),
  ]);
}

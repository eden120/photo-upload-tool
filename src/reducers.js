import { combineReducers } from 'redux-immutable';

import { authReducer } from './modules/auth';

const rootApp = combineReducers({
  auth: authReducer,
});

export default rootApp;

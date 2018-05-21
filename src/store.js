import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const hoc = compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middleware = [sagaMiddleware];
  const enhancer = hoc(applyMiddleware(...middleware));
  const store = createStore(
    reducer,
    fromJS(initialState),
    enhancer,
  );

  // then run the saga
  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
}

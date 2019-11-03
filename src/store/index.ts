import { createStore, compose } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import modules from './modules';
// import rootSaga from './sagas';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

export default function configureStore() {
  const store = createStore(modules, composeEnhancers());
  return store;
}

// export default function configureStore() {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(
//     modules,
//     composeEnhancers(applyMiddleware(sagaMiddleware)),
//   );
//   // sagaMiddleware.run(rootSaga);
//   return store;
// }

import { all, fork } from 'redux-saga/effects';

import sampleSaga from './sampleSaga';

export default function* rootSaga() {
  yield all([fork(sampleSaga)]);
}

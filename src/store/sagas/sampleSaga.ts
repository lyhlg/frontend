import { put, takeLatest, call } from 'redux-saga/effects';

import { fetchSample } from '@api/sample';
import { request, success, failure } from '@store/modules/sample/actions';

function* handleRequest() {
  try {
    const { data } = yield call(fetchSample);
    yield put(success(data));
  } catch (err) {
    yield put(failure());
  }
}

export default function* SampleSaga() {
  yield takeLatest(request, handleRequest);
}

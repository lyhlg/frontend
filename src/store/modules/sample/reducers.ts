import { createReducer } from 'typesafe-actions';

import { REQUEST, SUCCESS, FAILURE } from './actions';
import { SampleAction, SampleState } from './types';

const initialState: SampleState = {
  list: [
    { id: 1, userId: 1, title: '안녕', completed: false },
    { id: 2, userId: 3, title: '구래 안뇽', completed: true },
  ],
  isRequest: false,
};

const sample = createReducer<SampleState, SampleAction>(initialState, {
  [REQUEST]: state => ({
    ...state,
    isRequest: true,
  }),
  [SUCCESS]: (state, action) => {
    return {
      ...state,
      list: state.list.concat(action.payload),
      isRequest: false,
    };
  },
  [FAILURE]: state => ({
    ...state,
    isRequest: false,
  }),
});

export default sample;

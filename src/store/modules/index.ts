import { combineReducers } from 'redux';

import counter from '~store/modules/counter';
import todo from '~store/modules/todos';
import sample from '~store/modules/sample';

const rootReducer = combineReducers({
  counter,
  todo,
  sample,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

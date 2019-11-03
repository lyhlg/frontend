import { combineReducers } from 'redux';

import counter from '~store/modules/counter';
import todo from '~store/modules/todo';

const rootReducer = combineReducers({
  counter,
  todo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

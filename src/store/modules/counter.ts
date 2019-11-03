import { createAction, ActionType, createReducer } from 'typesafe-actions';

/**
 * Action Types
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

/**
 * Actions
 */
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();
// () => ({ type: INCREASE })
// () => ({ type: DECREASE })
// (payload: number) => ({ type: INCREASE_BY, payload })

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });

/**
 * const createItem = (name: string) => ({ type: CREATE_ITEM, payload: { id: nanoid(), name } });
 * const createItem = createStandardAction(CREATE_ITEM).map(name => ({ payload: { id: nanoid(), name } }));
 */

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

export default counter;

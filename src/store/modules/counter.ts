const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;

// import {
//   createAction,
//   ActionType,
//   createReducer,
//   // handleAction,
// } from 'typesafe-actions';
// import { Record } from 'immutable';

// /**
//  * Action Types
//  */
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_BY = 'counter/INCREASE_BY';

// /**
//  * Actions
//  */
// export const increase = createAction(INCREASE)();
// // () => ({ type: INCREASE })
// export const decrease = createAction(DECREASE)();
// // () => ({ type: DECREASE })
// export const increaseBy = createAction(INCREASE_BY)<number>();
// // (payload: number) => ({ type: INCREASE_BY, payload })

// const actions = { increase, decrease, increaseBy };
// type CounterAction = ActionType<typeof actions>;

// /**
//  * reducer with initial state
//  */

// interface ICounterState {
//   count: number;
// }

// const initialState: Record.Factory<ICounterState> = Record({
//   count: 0,
// });

// console.log(CounterAction);

// const counter = createReducer<ICounterState, CounterAction>(initialState, {
//   [INCREASE]: state => ({ count: state.count + 1 }),
//   [DECREASE]: state => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

// export default counter;

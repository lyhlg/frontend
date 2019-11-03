import { createAction, ActionType, createReducer } from 'typesafe-actions';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo };
type TodoAction = ActionType<typeof actions>;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text: action.payload,
      done: false,
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo => {
      if (todo.id === action.payload) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }),
  [REMOVE_TODO]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
});

export default todos;

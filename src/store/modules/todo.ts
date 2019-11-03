const ADD_TODO = 'ADD_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

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

function todos(state: TodoState = initialState, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: Math.max(...state.map(todo => todo.id)) + 1,
        text: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;

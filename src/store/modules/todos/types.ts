import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type TodoAction = ActionType<typeof actions>;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type TodoState = Todo[];

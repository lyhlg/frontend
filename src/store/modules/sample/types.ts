import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type SampleAction = ActionType<typeof actions>;

export interface Sample {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface SampleState {
  list: Sample[];
  isRequest: boolean;
}

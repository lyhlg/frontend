import { createAction } from 'typesafe-actions';

export interface SampleResponse {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// export type SampleState = SampleResponse[];

/**
 * Action Types
 */
export const REQUEST = 'sample/REQUEST';
export const SUCCESS = 'sample/SUCCESS';
export const FAILURE = 'sample/FAILURE';

/**
 * Actions
 */
export const request = createAction(REQUEST)();
export const success = createAction(SUCCESS)<SampleResponse>();
export const failure = createAction(FAILURE)();

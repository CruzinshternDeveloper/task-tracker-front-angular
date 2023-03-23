import { createAction, props } from '@ngrx/store';

const COMPONENT = 'Tasks';

export const GetTasks = createAction(`[${ COMPONENT }] Get Tasks`);
export const GetTasksSuccess = createAction(`[${ COMPONENT }] Get Tasks Success`, props<{ tasks: any }>());
export const GetTasksFailure = createAction(`[${ COMPONENT }] Get Tasks Failure`, props<{ error: any }>());

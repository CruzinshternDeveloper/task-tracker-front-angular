import { createAction, props } from '@ngrx/store';
import { ITask } from '../../shared/interfaces/tasks.interface';

const COMPONENT = 'Tasks';

export const GetTasks = createAction(`[${ COMPONENT }] Get Tasks`, props<{ startDate: string }>());
export const GetTasksSuccess = createAction(`[${ COMPONENT }] Get Tasks Success`, props<{ tasks: any }>());
export const GetTasksFailure = createAction(`[${ COMPONENT }] Get Tasks Failure`, props<{ error: any }>());

export const UpdateTask = createAction(`[${ COMPONENT }] Update Task`, props<{ task: ITask }>());
export const UpdateTaskSuccess = createAction(`[${ COMPONENT }] Update Task Success`, props<{ task: ITask }>());
export const UpdateTaskFailure = createAction(`[${ COMPONENT }] Update Task Failure`, props<{ error: any }>());

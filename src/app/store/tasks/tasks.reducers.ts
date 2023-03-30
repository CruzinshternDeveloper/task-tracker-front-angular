import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  CreateTask, CreateTaskFailure, CreateTaskSuccess,
  GetTasks,
  GetTasksFailure,
  GetTasksSuccess,
  UpdateTask,
  UpdateTaskFailure,
  UpdateTaskSuccess
} from './tasks.actions';

//this is necessary since id in my tasks are not 'id' but '_id' and it is necessary to specify that so that entity adapter can iterate through them properly
export function selectId(a: any): string {
  return a._id;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({ selectId });

export const initialState = adapter.getInitialState({
  isLoading: true,
  hasError: false
});

const reducer = createReducer(
  initialState,
  on(GetTasks,
    UpdateTask,
    CreateTask,
    (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),
  on(
    GetTasksFailure,
    UpdateTaskFailure,
    CreateTaskFailure,
    (state, { error }) => {
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    }),
  on(GetTasksSuccess, (state, { tasks }) => {
    return adapter.setAll(tasks, {
      ...state,
      isLoading: false,
    })
  }),
  on(UpdateTaskSuccess, (state, { task }) => {
    return adapter.upsertOne(task, {
      ...state,
      isLoading: false
    });
  }),
  on(CreateTaskSuccess, (state, { task }) => {
    return adapter.addOne(task, {
      ...state,
      isLoading: false
    })
  })
)

export const { selectAll } = adapter.getSelectors()

export function tasksReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}

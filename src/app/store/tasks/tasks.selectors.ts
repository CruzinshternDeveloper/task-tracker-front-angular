import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { filter, map, pipe } from 'rxjs';
import { selectAll } from './tasks.reducers';

export const tasksSelector = createFeatureSelector<any>('tasks');
export const tasksSelectorState = createSelector(tasksSelector, (state) => {
  return state
});

export const selectTasks = createSelector(tasksSelectorState, selectAll);


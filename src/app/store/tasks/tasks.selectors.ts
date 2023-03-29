import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { selectAll } from './tasks.reducers';
import { filter, map, pipe } from 'rxjs';
import { TASK_STATUS } from '../../shared/enums/task-status.enum';
import { ITask } from '../../shared/interfaces/tasks.interface';

export const tasksSelector = createFeatureSelector<any>('tasks');
export const tasksSelectorState = createSelector(tasksSelector, (state) => {
  return state;
});

export const selectTasks = createSelector(tasksSelectorState, selectAll);

export const SelectTodoTasks = pipe(
  select(selectTasks),
  filter( tasks => !!tasks),
  map((tasks: ITask[]) => tasks.filter((t: ITask) =>  t.status === TASK_STATUS.TODO))
)

export const SelectActiveTasks = pipe(
  select(selectTasks),
  filter( tasks => !!tasks),
  map((tasks: ITask[]) => tasks.filter((t: ITask) =>  t.status === TASK_STATUS.IN_PROGRESS))
)

export const SelectDoneTasks = pipe(
  select(selectTasks),
  filter( tasks => !!tasks),
  map((tasks: ITask[]) => tasks.filter((t: ITask) =>  t.status === TASK_STATUS.DONE))
)

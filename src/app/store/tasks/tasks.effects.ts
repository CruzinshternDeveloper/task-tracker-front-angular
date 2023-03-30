import { Injectable } from '@angular/core';
import { TasksService } from '../../tasks/services/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  CreateTask,
  CreateTaskFailure,
  CreateTaskSuccess,
  GetTasks,
  GetTasksFailure,
  GetTasksSuccess,
  UpdateTask,
  UpdateTaskFailure,
  UpdateTaskSuccess
} from './tasks.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ITask } from '../../shared/interfaces/tasks.interface';

@Injectable()
export class TasksEffects {
  constructor(private _tasksService: TasksService, private actions$: Actions) {}

  getAllTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTasks),
      switchMap(({ startDate }) => this._tasksService.getAllTasks(startDate)
        .pipe(
          map((tasks) => GetTasksSuccess({ tasks })),
          catchError(error => of(GetTasksFailure({ error })))
        ))
    )
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateTask),
      switchMap(({ task }) => this._tasksService.updateTask(task)
        .pipe(
          map((task: any) => UpdateTaskSuccess({ task })),
          catchError(error => of(UpdateTaskFailure({ error })))
        )
      )
    )
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateTask),
      switchMap(({ task }) => this._tasksService.createTask(task)
        .pipe(
          map((task: any) => CreateTaskSuccess({ task })),
          catchError(error => of(CreateTaskFailure({ error })))
        )
      )
    )
  });
}

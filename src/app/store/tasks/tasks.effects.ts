import { Injectable } from '@angular/core';
import { TasksService } from '../../tasks/services/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetTasks, GetTasksFailure, GetTasksSuccess } from './tasks.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class TasksEffects {
  constructor(private _tasksService: TasksService, private actions$: Actions) {}

  getAllTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTasks),
      switchMap(() => this._tasksService.getAllTasks()
        .pipe(
          map((tasks) => GetTasksSuccess({ tasks })),
          catchError(error => of(GetTasksFailure({ error })))
        ))
    )
  })
}

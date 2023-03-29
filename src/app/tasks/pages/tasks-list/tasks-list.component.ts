import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectActiveTasks, SelectDoneTasks, SelectTodoTasks } from '../../../store/tasks/tasks.selectors';
import { GetTasks, UpdateTask } from '../../../store/tasks/tasks.actions';
import { ITask } from '../../../shared/interfaces/tasks.interface';
import { getFormattedDate } from '../../../shared/helpers/format-date.helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  todoTasks$: Observable<ITask[]>;
  inProgressTasks$: Observable<ITask[]>;
  doneTasks$: Observable<ITask[]>;
  currentDate: string = getFormattedDate(new Date);

  constructor(private _store: Store<any>) {
    this._store.dispatch(GetTasks({ startDate: this.currentDate }));
  }

  ngOnInit(): void {
    this.todoTasks$ = this._store.pipe(SelectTodoTasks);
    this.inProgressTasks$ = this._store.pipe(SelectActiveTasks);
    this.doneTasks$ = this._store.pipe(SelectDoneTasks);
  }

  handleChangeDate(date: string) {
    this._store.dispatch(GetTasks({ startDate: date }));
  }

  handleStatusChange(task: ITask) {
    this._store.dispatch(UpdateTask({ task }));
  }
}

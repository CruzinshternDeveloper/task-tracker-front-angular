import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../../store/tasks/tasks.selectors';
import { GetTasks } from '../../../store/tasks/tasks.actions';
import { ITask } from '../../../shared/interfaces/tasks.interface';
import { TASK_STATUS } from '../../../shared/enums/task-status.enum';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  doneTasks: ITask[] = [];

  constructor(private _store: Store<any>) {
    this._store.dispatch(GetTasks());
  }

  ngOnInit(): void {
    this._store.select(selectTasks).subscribe((data) => {
      this.todoTasks = data.filter(i => i.status === TASK_STATUS.TODO);
      this.inProgressTasks = data.filter(i => i.status === TASK_STATUS.IN_PROGRESS);
      this.doneTasks = data.filter(i => i.status === TASK_STATUS.DONE);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../shared/interfaces/tasks.interface';
import { TasksService } from '../../services/tasks.service';
import { Store } from '@ngrx/store';
import { CreateTask } from '../../../store/tasks/tasks.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private _tasksService: TasksService, private _store: Store<any>) { }

  ngOnInit(): void {
  }

  handleCreateTask(task: ITask) {
    // this._store.dispatch(CreateTask({ task }));
    this._tasksService.createTask(task).subscribe();
  }

}

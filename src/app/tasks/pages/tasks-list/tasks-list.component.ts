import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../../store/tasks/tasks.selectors';
import { GetTasks } from '../../../store/tasks/tasks.actions';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private _store: Store<any>) {
    this._store.dispatch(GetTasks())
  }

  ngOnInit(): void {
    this._store.select(selectTasks).subscribe(data => console.log(data))

  }

}

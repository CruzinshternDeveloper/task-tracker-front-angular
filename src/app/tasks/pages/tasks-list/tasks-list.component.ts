import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../../store/tasks/tasks.selectors';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private _store: Store<any>) {
  }

  ngOnInit(): void {
    this._store.select(selectTasks).subscribe(data => console.log(data))

  }

}

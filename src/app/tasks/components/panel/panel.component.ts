import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../../shared/interfaces/tasks.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() todoTasks: ITask[] = [];
  @Input() inProgressTasks: ITask[] = [];
  @Input() doneTasks: ITask[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../../shared/interfaces/tasks.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PANEL } from '../../../shared/enums/panel.enum';
import { TASK_STATUS } from '../../../shared/enums/task-status.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() todoTasks: ITask[] | null = [];
  @Input() inProgressTasks: ITask[] | null  = [];
  @Input() doneTasks: ITask[] | null  = [];
  @Output() itemToUpdate: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>) {
    let item;
    const itemToModify = event.previousContainer.data[event.previousIndex];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      switch (event.container.id) {
        case PANEL.TODO: item = { ...itemToModify, status: TASK_STATUS.TODO };
          break;
        case PANEL.IN_PROGRESS: item = { ...itemToModify, status: TASK_STATUS.IN_PROGRESS };
          break;
        case PANEL.DONE: item = { ...itemToModify, status: TASK_STATUS.DONE };
          break;
        default:
          break;
      }
      this.itemToUpdate.emit(item);
    }
  }
}

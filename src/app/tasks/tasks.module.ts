import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksStatisticsComponent } from './pages/tasks-statistics/tasks-statistics.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksStatisticsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }

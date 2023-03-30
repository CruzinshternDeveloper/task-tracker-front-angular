import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksStatisticsComponent } from './pages/tasks-statistics/tasks-statistics.component';
import { TasksComponent } from './tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PanelComponent } from './components/panel/panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksStatisticsComponent,
    TasksComponent,
    PanelComponent,
    CreateTaskComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }

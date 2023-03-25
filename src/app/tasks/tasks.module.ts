import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksStatisticsComponent } from './pages/tasks-statistics/tasks-statistics.component';
import { TasksComponent } from './tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PanelComponent } from './components/panel/panel.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksStatisticsComponent,
    TasksComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule,
    TranslateModule,
  ]
})
export class TasksModule { }

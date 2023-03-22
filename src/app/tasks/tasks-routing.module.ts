import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksStatisticsComponent } from './pages/tasks-statistics/tasks-statistics.component';
import { TasksComponent } from './tasks.component';

const tasksChildRoutes: Routes = [
  { path: 'list', component: TasksListComponent },
  { path: 'statistics', component: TasksStatisticsComponent },
  { path: '**', redirectTo: 'list', pathMatch: 'full' }
];

const routes: Routes = [
  { path: '', component: TasksComponent, children: tasksChildRoutes }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TasksRoutingModule { }

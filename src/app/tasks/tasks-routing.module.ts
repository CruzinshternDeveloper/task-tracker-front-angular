import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksStatisticsComponent } from './pages/tasks-statistics/tasks-statistics.component';
import { TasksComponent } from './tasks.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ROUTES } from '../shared/enums/routes.enum';

const tasksChildRoutes: Routes = [
  { path: ROUTES.TASKS_LIST, component: TasksListComponent },
  { path: ROUTES.TASKS_STATISTICS, component: TasksStatisticsComponent },
  { path: ROUTES.TASKS_CREATE, component: CreateTaskComponent },
  { path: '**', redirectTo: ROUTES.TASKS_LIST, pathMatch: 'full' }
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

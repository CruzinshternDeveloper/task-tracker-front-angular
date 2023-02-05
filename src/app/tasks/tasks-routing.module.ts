import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: 'tasks-list', component: TasksListComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TasksRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    NgForOf,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

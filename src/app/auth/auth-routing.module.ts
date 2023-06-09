import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

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
    UpperCasePipe,
    NgIf,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthFormComponent
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

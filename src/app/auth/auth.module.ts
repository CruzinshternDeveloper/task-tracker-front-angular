import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './services/authorization.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService
  ],
})
export class AuthModule { }

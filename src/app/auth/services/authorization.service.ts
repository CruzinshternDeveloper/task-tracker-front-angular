import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ROUTES } from '../../shared/enums/routes.enum';
import { IUserRegister } from '../../shared/interfaces/user-register.interface';
import { IUserLogin } from '../../shared/interfaces/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private _httpClient: HttpClient) { }

  login(body: IUserLogin) {
    this._httpClient.post(environment.BASIC_URL + '/' + ROUTES.REGISTRATION, body);
  }

  registration(body: IUserRegister) {
    this._httpClient.post(environment.BASIC_URL + '/' + ROUTES.REGISTRATION, body);
  }
}

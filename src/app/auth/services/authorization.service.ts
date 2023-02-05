import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ROUTES } from '../../shared/enums/routes.enum';
import { IUserRegister } from '../../shared/interfaces/user-register.interface';
import { IUserLogin } from '../../shared/interfaces/user-login.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { ILoginResponse } from '../../shared/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private _httpClient: HttpClient) { }

  login(body: IUserLogin): Observable<ILoginResponse | HttpErrorResponse> {
    return this._httpClient.post<ILoginResponse>([environment.BASIC_URL, ROUTES.AUTH, ROUTES.LOGIN].join('/'), body)
      .pipe(
        tap((data: ILoginResponse) => {
          if (data && data.token) {
            this._setAuthToken(data.token);
          }
        }),
        catchError(err => {
          return of(err as HttpErrorResponse)
        })
      )
  }

  registration(body: IUserRegister) {
    return this._httpClient.post([environment.BASIC_URL, ROUTES.USERS, ROUTES.CREATE].join('/'), body)
      .pipe(
        catchError(err => {
          return of(err as HttpErrorResponse)
        })
      )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(environment.tt_token);
  }

  private _setAuthToken(token: string) {
    localStorage.setItem(environment.tt_token, token);
  }
}

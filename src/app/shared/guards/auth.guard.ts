import { CanActivate } from '@angular/router';
import { AuthorizationService } from '../../auth/services/authorization.service';
import { Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ROUTES } from '../enums/routes.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuth: boolean;

  constructor(private _authorizationService: AuthorizationService,
              private _navigationService: NavigationService) {}

  canActivate(): boolean {
    this.isAuth = this._authorizationService.isLoggedIn();
    if (!this.isAuth) {
      this._navigationService.handleNavigation([ROUTES.AUTH]);
      return false;
    }
    return true;
  }
}

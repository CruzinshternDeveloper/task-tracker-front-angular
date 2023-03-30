import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-item.interface';
import { NAV_MENU_ITEMS } from '../../variables/nav-menu-items.variable';
import { LOGOUT_MENU_ITEM } from '../../variables/system-menu-item.variable';
import { AuthorizationService } from '../../../auth/services/authorization.service';
import { NavigationService } from '../../services/navigation.service';
import { ROUTES } from '../../enums/routes.enum';

@Component({
  selector: 'tt-menu',
  templateUrl: './tt-menu.component.html',
  styleUrls: ['./tt-menu.component.scss']
})
export class TtMenuComponent implements OnInit {
  isOpened: boolean = false;
  navMenuItems: IMenuItem[] = NAV_MENU_ITEMS;
  logoutMenuItem: IMenuItem[] = LOGOUT_MENU_ITEM;

  constructor(private _authService: AuthorizationService, private _navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleMenuState() {
    this.isOpened = !this.isOpened;
  }

  async handleLogout() {
    this._authService.logout();
    await this._navigationService.handleNavigation([ROUTES.AUTH]);
  }

  async handleRedirect(route: string | undefined) {
    if (route) await this._navigationService.handleNavigation([ROUTES.TASKS, route]);
  }
}

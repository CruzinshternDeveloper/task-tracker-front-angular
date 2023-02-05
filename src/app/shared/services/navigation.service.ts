import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router: Router) { }

  async handleNavigation(path: string[]) {
    await this._router.navigate([path.join('/')]);
  }
}

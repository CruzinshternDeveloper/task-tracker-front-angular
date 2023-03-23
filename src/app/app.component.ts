import { Component } from '@angular/core';
import { AppLanguageService } from './shared/services/app-language.service';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTES } from './shared/enums/routes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu: boolean = false;

  constructor(private _appLanguageService: AppLanguageService, private _router: Router) {}

  ngOnInit(): void {
    this._appLanguageService.getLanguage();
    this._router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        const url = data.url;
        this.showMenu = !url.includes(ROUTES.AUTH);
      }
    });
  }
}

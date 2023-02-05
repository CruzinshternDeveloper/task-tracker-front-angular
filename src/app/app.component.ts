import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { AppLanguageService } from './shared/services/app-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _appLanguageService: AppLanguageService) {
  }

  ngOnInit(): void {
    this._appLanguageService.getLanguage();
  }
}

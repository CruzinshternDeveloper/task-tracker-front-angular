import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {

  constructor(private _translateService: TranslateService) { }

  getLanguage() {
    const lang = localStorage.getItem(environment.tt_lang_local_storage_key) || environment.defaultLocale;
    this._translateService.use(lang);
  }

  setLanguage(lang: string) {
    localStorage.setItem(environment.tt_lang_local_storage_key, lang);
    this._translateService.use(lang);
  }
}

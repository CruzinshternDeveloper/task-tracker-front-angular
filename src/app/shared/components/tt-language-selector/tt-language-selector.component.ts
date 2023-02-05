import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_SELECTOR_ARRAY } from '../../variables/language-selector.variable';
import { AppLanguageService } from '../../services/app-language.service';

@Component({
  selector: 'tt-language-selector',
  templateUrl: './tt-language-selector.component.html',
  styleUrls: ['./tt-language-selector.component.scss']
})
export class TtLanguageSelectorComponent implements OnInit {
  flags = LANGUAGE_SELECTOR_ARRAY;

  constructor(private _appLanguageService: AppLanguageService) { }

  ngOnInit(): void {
  }

  handleLangChange(key: string) {
    this._appLanguageService.setLanguage(key);
  }
}

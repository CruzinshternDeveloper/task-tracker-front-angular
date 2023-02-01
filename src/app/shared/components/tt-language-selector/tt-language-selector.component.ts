import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_SELECTOR_ARRAY } from '../../variables/language-selector.variable';

@Component({
  selector: 'tt-language-selector',
  templateUrl: './tt-language-selector.component.html',
  styleUrls: ['./tt-language-selector.component.scss']
})
export class TtLanguageSelectorComponent implements OnInit {
  flags = LANGUAGE_SELECTOR_ARRAY;

  constructor(private _translateService: TranslateService) { }

  ngOnInit(): void {
  }

  handleLangChange(key: string) {
    this._translateService.use(key);
  }
}

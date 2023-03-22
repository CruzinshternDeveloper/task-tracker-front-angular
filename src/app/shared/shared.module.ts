import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtInputComponent } from './components/tt-input/tt-input.component';
import { TtButtonComponent } from './components/tt-button/tt-button.component';
import { TtLanguageSelectorComponent } from './components/tt-language-selector/tt-language-selector.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { TranslateModule } from '@ngx-translate/core';
import { TtMenuComponent } from './components/tt-menu/tt-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent,
    TtMenuComponent
  ],
  exports: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent,
    TtMenuComponent
  ],
  imports: [
    CommonModule,
    AngularCountriesFlagsModule,
    TranslateModule,
    MatIconModule,
  ]
})
export class SharedModule { }

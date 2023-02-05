import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtInputComponent } from './components/tt-input/tt-input.component';
import { TtButtonComponent } from './components/tt-button/tt-button.component';
import { TtLanguageSelectorComponent } from './components/tt-language-selector/tt-language-selector.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent
  ],
  exports: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent
  ],
  imports: [
      CommonModule,
      AngularCountriesFlagsModule,
      TranslateModule
  ]
})
export class SharedModule { }

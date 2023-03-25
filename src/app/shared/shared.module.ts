import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtInputComponent } from './components/tt-input/tt-input.component';
import { TtButtonComponent } from './components/tt-button/tt-button.component';
import { TtLanguageSelectorComponent } from './components/tt-language-selector/tt-language-selector.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { TranslateModule } from '@ngx-translate/core';
import { TtMenuComponent } from './components/tt-menu/tt-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { TtDatepickerComponent } from './components/tt-datepicker/tt-datepicker.component';

@NgModule({
  declarations: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent,
    TtMenuComponent,
    TtDatepickerComponent
  ],
  exports: [
    TtInputComponent,
    TtButtonComponent,
    TtLanguageSelectorComponent,
    TtMenuComponent,
    TtDatepickerComponent
  ],
  imports: [
    CommonModule,
    AngularCountriesFlagsModule,
    TranslateModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }

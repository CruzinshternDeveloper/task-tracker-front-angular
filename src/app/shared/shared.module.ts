import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtInputComponent } from './components/tt-input/tt-input.component';
import { TtButtonComponent } from './components/tt-button/tt-button.component';

@NgModule({
  declarations: [
    TtInputComponent,
    TtButtonComponent
  ],
  exports: [
    TtInputComponent,
    TtButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';



@NgModule({
  declarations: [
    LogoComponent,
    BorderedFieldComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

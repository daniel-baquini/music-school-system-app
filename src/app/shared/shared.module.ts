import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        BorderedFieldComponent,
        ButtonComponent,
        LogoComponent
    ],
    exports: [
        BorderedFieldComponent,
        ButtonComponent,
        LogoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

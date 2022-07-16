import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BorderedFieldComponent,
        ButtonComponent,
        LogoComponent,
        PageTitleComponent
    ],
    exports: [
        BorderedFieldComponent,
        ButtonComponent,
        CommonModule,
        LogoComponent,
        PageTitleComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }

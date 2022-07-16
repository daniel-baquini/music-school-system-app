import { ConfirmationCodePageComponent } from './create-account/confirmation-code-page/confirmation-code-page.component';
import { CpfPageComponent } from './create-account/cpf-page/cpf-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const authenticationRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ''
    },
    {
        component: CpfPageComponent,
        path: 'create-account/step/1'
    },
    {
        component: ConfirmationCodePageComponent,
        path: 'create-account/step/2'
    }
]

@NgModule({
    declarations: [
        LoginPageComponent,
        CpfPageComponent,
        ConfirmationCodePageComponent
    ],
    imports: [
        RouterModule.forChild(authenticationRoutes),
        SharedModule
    ]
})
export class AuthenticationModule { }

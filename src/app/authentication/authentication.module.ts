import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CpfPageComponent } from './create-account/cpf-page/cpf-page.component';

const authenticationRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ''
    },
    {
        component: CpfPageComponent,
        path: 'create-account/step/1'
    }
]

@NgModule({
    declarations: [
        LoginPageComponent,
        CpfPageComponent
    ],
    imports: [
        RouterModule.forChild(authenticationRoutes),
        SharedModule
    ]
})
export class AuthenticationModule { }

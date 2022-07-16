import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const homeRoutes: Routes = [
    {
        component: HomePageComponent,
        path: ''
    }
]

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        SharedModule
    ]
})
export class HomeModule { }

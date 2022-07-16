import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ModuleButtonComponent } from './module-button/module-button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
    {
        component: HomePageComponent,
        path: ''
    }
]

@NgModule({
    declarations: [
        HomePageComponent,
        ModuleButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes)
    ]
})
export class HomeModule { }

import { AboutPageComponent } from './about-page/about-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const aboutRoutes: Routes = [
    {
        component: AboutPageComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        AboutPageComponent
    ],
    imports: [
        RouterModule.forChild(aboutRoutes),
        SharedModule
    ]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { YourClassesPageComponent } from './your-classes-page/your-classes-page.component';
import { ClassesHistoryComponent } from './classes-history/classes-history.component';
import { NextClassComponent } from './next-class/next-class.component';

const yourClassesRoutes: Routes = [
    {
        component: YourClassesPageComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        YourClassesPageComponent,
        ClassesHistoryComponent,
        NextClassComponent
    ],
    imports: [
        RouterModule.forChild(yourClassesRoutes),
        SharedModule
    ]
})
export class YourClassesModule { }

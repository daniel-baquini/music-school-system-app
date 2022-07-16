import { MaterialLinkComponent } from './material-link/material-link.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const materialRoutes: Routes = [
    {
        component: MaterialPageComponent,
        path: ''
    }
]

@NgModule({
    declarations: [
        MaterialLinkComponent,
        MaterialPageComponent
    ],
    imports: [
        RouterModule.forChild(materialRoutes),
        SharedModule
    ]
})
export class MaterialModule { }

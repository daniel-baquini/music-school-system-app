import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CourseComponent } from './course/course.component';

const profileRoutes: Routes = [
    {
        component: ProfilePageComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        ProfilePageComponent,
        CourseComponent
    ],
    imports: [
        RouterModule.forChild(profileRoutes),
        SharedModule
    ]
})
export class ProfileModule { }

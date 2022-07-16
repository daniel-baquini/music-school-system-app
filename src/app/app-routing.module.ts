import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        path: ""
    },
    {
        loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
        path: "about"
    },
    {
        loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
        path: "authentication"
    },
    {
        loadChildren: () => import("./material/material.module").then(m => m.MaterialModule),
        path: "material"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

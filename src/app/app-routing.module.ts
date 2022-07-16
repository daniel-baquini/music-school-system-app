import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        path: ""
    },
    {
        loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
        path: "authentication"
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

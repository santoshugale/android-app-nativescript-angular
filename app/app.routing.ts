import { Component } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { FullPageComponent } from "./pages/full-page/full-page.component";

export const routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "fullpage",
        // component: FullPageComponent
        loadChildren: () => require('./pages/full-page/full-page.module')['FullPageModule']
        // loadChildren: "./pages/full-page/full-page.module#FullPageModule"
    },
];
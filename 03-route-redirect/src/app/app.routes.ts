import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "**",
        redirectTo: () => {
            const service = inject(AuthService);
            if(service.isLoggedIn) {
                return "/home";
            }
            else {
                return "/login";
            }
        },
    },
];

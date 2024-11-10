import {
  ActivatedRouteSnapshot, GuardResult, MaybeAsync,
  Router,
  RouterStateSnapshot,
  Routes,
  UrlSegmentGroup,
  UrlSerializer,
  UrlTree
} from '@angular/router';
import {inject} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AppService} from './app.service';
import {HomeComponent} from './home/home.component';
import {NullComponent} from './null/null.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
    canActivate: [async () => {
      return inject(AppService).fromHome();
    }],
  },
  {
    path: "profile",
    pathMatch: "full",
    component: ProfileComponent,
    canActivate: [async () => {
      return inject(AppService).fromProfile();
    }],
  },
  {
    path: "login",
    pathMatch: "full",
    component: LoginComponent,
    canActivate: [async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      inject(AppService).fromLogin(route.params["returnTo"]);
      return true;
    }],
  },
  {
    path: "**",
    canActivate: [async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      inject(AppService).navigateToLogin(state.url);
      return false;
    }],
    component: NullComponent,
  },
];

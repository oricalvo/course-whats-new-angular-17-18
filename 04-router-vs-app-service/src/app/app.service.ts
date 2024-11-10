import {inject, Injectable} from '@angular/core';
import {GuardResult, RedirectCommand, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  router = inject(Router);

  state: AppState = {
    user: null,
    returnTo: null,
  };

  constructor() { }

  navigateToLogin(returnTo: string) {
    console.log("navigateToLogin", returnTo);

    this.router.navigate(['login', {returnTo}]);
  }

  fromLogin(returnTo: string) {
    console.log("fromLogin", returnTo);

    this.state.returnTo = returnTo;
  }

  fromHome(): GuardResult {
    console.log("fromHome");

    if(!this.state.user) {
      this.navigateToLogin(location.pathname);
      return false;
    }

    return true;
  }

  fromProfile() {
    console.log("fromProfile");

    if(!this.state.user) {
      this.navigateToLogin(location.pathname);
      return false;
    }

    return true
  }

  login() {
    console.log("login");

    this.state.user = {
      id: 1,
      name: "Ori",
    }

    const returnUrl = this.state.returnTo || "/home";
    console.log("Navigating back to: " + returnUrl);
    this.router.navigate([returnUrl]);
  }
}

interface AppState {
  returnTo: string|null;
  user: User|null;
}

interface User {
  id: number;
  name: string;
}

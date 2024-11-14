import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedIn: boolean = (localStorage.getItem("isLoggedIn") == "true");

    router = inject(Router);

    constructor() {
    }

    get isLoggedIn() {
        return this.loggedIn;
    }

    login() {
        this.loggedIn = true;
        localStorage.setItem("isLoggedIn", "true");

        this.router.navigate(["/home"]);
    }
}

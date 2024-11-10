import { Component } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private appService: AppService) {
  }

  get state() {
    return this.appService.state;
  }

  login() {
    this.appService.login();
  }
}

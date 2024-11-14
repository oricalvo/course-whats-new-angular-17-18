import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {sayHello} from './common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'starter';

    constructor() {
        const x: number = sayHello();
    }
}

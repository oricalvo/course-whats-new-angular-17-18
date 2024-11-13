import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    showMessage: boolean = false;
    counter = 0;

    toggle() {
        this.showMessage = !this.showMessage;
    }

    inc() {
        ++this.counter;
    }
}

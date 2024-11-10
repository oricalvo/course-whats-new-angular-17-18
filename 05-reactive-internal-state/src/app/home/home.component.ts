import { Component } from '@angular/core';
import {CounterComponent} from '../counter/counter.component';
import {Counter2Component, CounterOptions} from '../counter2/counter2.component';

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CounterComponent, Counter2Component],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent {
    value: number = 1;
    options: CounterOptions = {
        value: 1,
    };

    inc() {
        ++this.value;
        ++this.options.value;
    }
}

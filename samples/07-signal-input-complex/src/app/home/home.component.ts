import {Component, signal} from '@angular/core';
import {CounterComponent, CounterOptions} from '../counter/counter.component';

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CounterComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent {
    options = signal<CounterOptions>({
        value: 1,
    });

    inc() {
        this.options.update(opt => ({
            value: opt.value + 1,
        }));
    }
}

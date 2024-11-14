import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    counter = signal<CounterOptions>({
        value: 0
    });

    inc() {
        // this.counter().value++;

        // this.counter.set(this.counter());

        this.counter.update(c => {
            c.value++;
            return c;
        });
    }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface CounterOptions {
    value: number;
}

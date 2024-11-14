import { Component, computed, input, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-counter",
    standalone: true,
    imports: [],
    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.scss",
})
export class CounterComponent {
    options = input.required<CounterOptions>();
    message = computed(() => {
        return "Hello user, counter is " + this.options().value;
    });
}

export interface CounterOptions {
    value: number;
}

import {Component, computed, input, Input, numberAttribute, OnChanges, SimpleChanges} from "@angular/core";

@Component({
    selector: "app-counter",
    standalone: true,
    imports: [],
    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.scss",
})
export class CounterComponent {
    value = input.required<number>();
    message = computed(() => {
        return "Hello user, counter is " + this.value();
    });
}

import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-counter2",
    standalone: true,
    imports: [],
    templateUrl: "./counter2.component.html",
    styleUrl: "./counter2.component.scss",
})
export class Counter2Component implements OnChanges {
    @Input({ required: true }) options!: CounterOptions;

    //
    //  This is an internal state
    //
    protected message!: string;

    ngOnChanges(changes: SimpleChanges): void {
        this.message = "Hello user, counter is " + this.options.value;
    }
}

export interface CounterOptions {
    value: number;
}

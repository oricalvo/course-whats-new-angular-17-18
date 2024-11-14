import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
    @Input() counter!: Counter;

    constructor() {
        console.log("CounterComponent", "ctor");
    }

    ngOnDestroy() {
        console.log("CounterComponent", "ngOnDestroy");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("CounterComponent", "ngOnChanges");
    }
}

export interface Counter {
    id: string;
    value: number;
}



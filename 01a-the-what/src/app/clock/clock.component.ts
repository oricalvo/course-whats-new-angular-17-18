import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
    selector: 'app-clock',
    standalone: true,
    imports: [],
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.scss',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent {
    time: string = (new Date()).toLocaleString();

    constructor() {
        setInterval(()=> {
            this.time = (new Date()).toLocaleString();
        }, 1000);
    }
}

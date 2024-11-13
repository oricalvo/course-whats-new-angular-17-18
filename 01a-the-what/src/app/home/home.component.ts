import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    counter: number = 0;
    dummy: boolean = false;

    inc() {
        ++this.counter;
        this.dummy = true;
    }
}

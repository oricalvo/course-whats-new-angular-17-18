import {Component} from '@angular/core';
import {AdvancedComponent} from '../advanced/advanced.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        AdvancedComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    isAdvancedViewVisible = false;

    toggleAdvancedView() {
        this.isAdvancedViewVisible = !this.isAdvancedViewVisible;
    }
}

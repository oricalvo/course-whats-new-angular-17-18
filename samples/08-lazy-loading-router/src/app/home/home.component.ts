import {Component, ViewChild, ViewContainerRef} from '@angular/core';
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
    @ViewChild('placeholder', {read: ViewContainerRef}) placeholder!: ViewContainerRef;

    async loadAdvancedView() {
        console.log("Loading");
        const AdvancedComponent = (await import('../advanced/advanced.component')).AdvancedComponent;
        this.placeholder.createComponent(AdvancedComponent);
        console.log("Loaded");
    }
}

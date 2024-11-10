import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;

    hasContent = false;

    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this.hasContent = this.wrapper.nativeElement.childNodes.length > 0;
        });
    }
}

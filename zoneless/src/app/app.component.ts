import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div>{{ counter }}</div>
        <button (click)="inc()">Inc</button>
        <button #nonAngularButton>Inc (addEventListener)</button>
        <button (click)="reset()">Reset (setTimeout)</button>
    `,
    styles: [],
})
export class AppComponent {
    @ViewChild("nonAngularButton", { static: true }) mySpan!: ElementRef<HTMLButtonElement>;

    counter = 0;

    ngAfterViewInit() {
        this.mySpan.nativeElement.addEventListener("click", () => {
            this.counter++;
        });
    }

    inc() {
        this.counter++;
    }

    reset() {
        setTimeout(()=> {
            this.counter = 0;
        }, 0);
    }
}

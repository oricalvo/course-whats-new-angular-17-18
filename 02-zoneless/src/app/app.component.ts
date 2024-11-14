import {ChangeDetectorRef, Component, ElementRef, ViewChild, signal} from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div>{{ counter().value }}</div>
        <button (click)="inc()">Inc</button>
        <button #nonAngularButton>Inc (addEventListener)</button>
        <button (click)="reset()">Reset (setTimeout)</button>
    `,
    styles: [],
})
export class AppComponent {
    @ViewChild("nonAngularButton", {static: true}) mySpan!: ElementRef<HTMLButtonElement>;

    counterRaw = {
        value :0
    };

    counter = signal(this.counterRaw);

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        // this.mySpan.nativeElement.addEventListener("click", () => {
        //     this.counter++;
        //     // this.cdr.markForCheck();
        // });
    }

    async inc() {
        setTimeout(()=> {
            this.counterRaw.value++;
            console.log("XXX");
            this.counter.set(this.counterRaw);
            // this.counter.update(c => ({value: c.value + 1}));
        }, 100);

        // this.counter.update(v => v+1);
        // this.counter++;
        // this.cdr.markForCheck();
    }

    reset() {
        // setTimeout(() => {
        //     this.counter = 0;
        //     // this.cdr.markForCheck();
        // }, 0);
    }
}


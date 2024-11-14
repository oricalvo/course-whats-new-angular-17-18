import {Component} from '@angular/core';
import pMap from "p-map";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'myapp';
    counter = 0;

    async run() {
        const {sayHello} = await import("./common");
        sayHello();
    }

    inc() {
        ++this.counter;
    }
}

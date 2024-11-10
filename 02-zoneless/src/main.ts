import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import {ApplicationRef} from '@angular/core';

console.log("After loading Zone.js:", window.setTimeout);

async function main() {
    try {
        await platformBrowserDynamic().bootstrapModule(AppModule, {
            // ngZoneEventCoalescing: true,
            // ngZone: "noop"
        });
    }
    catch(err) {
        console.error(err);
    }
}

main();


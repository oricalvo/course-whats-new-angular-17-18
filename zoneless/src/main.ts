import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

console.log("After loading Zone.js:", window.setTimeout);

platformBrowserDynamic()
    .bootstrapModule(AppModule, {
        ngZoneEventCoalescing: true,
        // ngZone: "noop"
    })
    .catch(err => console.error(err));

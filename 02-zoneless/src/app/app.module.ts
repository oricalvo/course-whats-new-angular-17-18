import { NgModule, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { provideMyChangeDetectionScheduler, provideTickLogging } from "./providers";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
        provideTickLogging(),
        provideExperimentalZonelessChangeDetection(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}


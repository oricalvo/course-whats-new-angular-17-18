import {NgModule, provideExperimentalZonelessChangeDetection} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
        provideExperimentalZonelessChangeDetection(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

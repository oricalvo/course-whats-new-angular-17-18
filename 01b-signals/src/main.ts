import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {computed, effect, runInInjectionContext, signal} from '@angular/core';

function playWithSignals() {
    //  Create
    const num = signal(0);

    //  Update
    num.update(v => ++v);
    num.set(12);

    //  Read
    console.log("Reading: " + num());

    //  Monitor
    effect(()=> {
        console.log(message());
    });

    //  Reactivity
    const message = computed(()=> {
        return "Current value is: " + num();
    });

    num.set(13);
}

async function main() {
    try {
        const appRef = await bootstrapApplication(AppComponent, appConfig);

        runInInjectionContext(appRef.injector, playWithSignals);
    }
    catch(err) {
        console.error(err);
    }
}

main();

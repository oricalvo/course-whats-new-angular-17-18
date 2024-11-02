import {
    APP_INITIALIZER,
    ApplicationRef,
    Injectable,
    ɵChangeDetectionScheduler,
    ɵChangeDetectionSchedulerImpl,
    ɵNotificationSource,
} from "@angular/core";

export function provideTickLogging() {
    return {
        provide: APP_INITIALIZER,
        useFactory: (appRef: any) => {
            return () => {
                const originalTick = appRef._tick;
                appRef._tick = function () {
                    console.log("ApplicationRef tick");
                    originalTick.apply(this, <any>arguments);
                }
            }
        },
        multi: true,
        deps: [ApplicationRef],
    }
}

export function provideMyChangeDetectionScheduler() {
    const NotificationSourceNames = {
        [0]: "MarkAncestorsForTraversal",
        [1]: "SetInput",
        [2]: "DeferBlockStateUpdate",
        [3]: "DebugApplyChanges",
        [4]: "MarkForCheck",
        [5]: "Listener",
        [6]: "CustomElement",
        [7]: "RenderHook",
        [8]: "DeferredRenderHook",
        [9]: "ViewAttached",
        [10]: "ViewDetachedFromDOM",
        [11]: "AsyncAnimationsLoaded",
        [12]: "PendingTaskRemoved",
        [13]: "RootEffect",
        [14]: "ViewEffect",
    }

    @Injectable()
    class MyChangeDetectionSchedulerImpl extends ɵChangeDetectionSchedulerImpl {
        override notify(source: ɵNotificationSource): void {
            console.log("ChangeDetectionScheduler", NotificationSourceNames[source]);

            super.notify(source);
        }

        override runningTick: boolean = false;
    }

    return {provide: ɵChangeDetectionScheduler, useClass: MyChangeDetectionSchedulerImpl};
}

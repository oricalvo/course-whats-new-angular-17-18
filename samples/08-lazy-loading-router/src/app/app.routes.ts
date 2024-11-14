import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdvancedComponent} from './advanced/advanced.component';

export const routes: Routes = [
    // {
    //     path: "advanced",
    //     loadComponent: ()=>import('./advanced/advanced.component').then(m => m.AdvancedComponent),
    // },
    {
        path: "**",
        component: HomeComponent,
    }
];

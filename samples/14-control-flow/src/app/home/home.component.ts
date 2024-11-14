import { Component } from '@angular/core';
import {Counter, CounterComponent} from '../counter/counter.component';
import {identity} from 'rxjs';
import {NgClass} from '@angular/common';
import {delay} from '../common';
import pMap from 'p-map';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CounterComponent,
        NgClass
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    showBasic = false;
    showAdvanced = false;

    counters: Counter[] = [
        {id: "counter1", value: 10},
        {id: "counter2", value: 42},
    ];

    async refresh() {
        this.counters = [
            {id: "counter1", value: 10},
            {id: "counter2", value: 42},
        ];
    }

    protected readonly identity = identity;
}

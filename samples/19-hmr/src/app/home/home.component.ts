import { Component } from '@angular/core';
// import pMap from 'p-map';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    counter: number = 0;

    inc() {
        ++this.counter;

        // pMap([], ()=>{});
    }
}

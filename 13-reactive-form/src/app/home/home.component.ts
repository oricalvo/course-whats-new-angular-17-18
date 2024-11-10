import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    myForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        more: new FormGroup({
            street: new FormControl(""),
            city: new FormControl(""),
        }),
    });

    constructor() {
        this.myForm.events.subscribe(ev => {
            console.log("events", ev);
        });
    }

    get name() {
        return this.myForm.controls['name'];
    }

    get email() {
        return this.myForm.controls['email'];
    }
}

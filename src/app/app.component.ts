import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-driven-form-demo';

  // Create the form group
  myForm!: FormGroup;

  constructor() {
  }

  // Handle form submission
  onSubmit() {
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitForm() {
    // Handle form submission logic here
    console.log(this.formData);
  }
}

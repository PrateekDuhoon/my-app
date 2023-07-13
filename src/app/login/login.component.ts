import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted = false;
  loginStatus: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginStatus = 'Logging in...';

    // Simulate login API call with delay
    const loginRequest = this.fakeLogin()
      .pipe(delay(2000)) // Simulate delay of 2 seconds
      .subscribe(
        () => {
          this.loginStatus = 'Login successful';
          this.formSubmitted = true;
          // Additional logic after successful login
        },
        () => {
          this.loginStatus = 'Invalid credentials';
          // Additional error handling
        }
      );
  }

  fakeLogin(): Observable<void> {
    // Simulated login API call
    return new Observable<void>(observer => {
      // Replace this with your actual login API call logic
      // Call observer.next() for successful login, and observer.error() for login failure
      observer.next();
      observer.complete();
    });
  }
}

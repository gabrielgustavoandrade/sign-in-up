import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

  onSubmit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    if (
      user.email === this.signInForm.value.email ||
      user.name === this.signInForm.value.email
    ) {
      if (user.password === this.signInForm.value.password) {
        alert('Successfully logged in.');
      } else alert('Maybe you missed your password.');
    } else alert('Looks like your email are wrong.')
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;

  constructor(private formBuild: FormBuilder) {
    this.signUpForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.signUpForm.value);
    localStorage.setItem('user', JSON.stringify(this.signUpForm.value));
    this.signUpForm.reset();
    console.log(localStorage.getItem('user'));
    alert('User successfully inserted.')
  }
}

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

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.signInForm.value);
    this.signInForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSignUp = this.formBuilder.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      fullname: ['', Validators.required],
      age: ['', [
        Validators.pattern('[0-9]+'),
        Validators.max(80),
        Validators.min(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirm_password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  ngOnInit() {
  }
  onSignUp() {
    const { email, fullname, age, password, confirm_password } = this.formSignUp.value;
    console.log(email, fullname, age, password, confirm_password);
  }
  isValidInput(controlName: string): boolean {
    const input = this.formSignUp.get(controlName);
    if (input.invalid && input.touched) {
      return false;
    }
    return true;
  }
}

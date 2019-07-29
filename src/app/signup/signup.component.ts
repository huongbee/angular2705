import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSignUp = this.formBuilder.group({
      email: '',
      fullname: '',
      age: '',
      password: '',
      confirm_password: ''
    });
  }

  ngOnInit() {
  }

}

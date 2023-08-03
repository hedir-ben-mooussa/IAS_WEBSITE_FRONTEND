import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  //create formGroup
  signinForm: FormGroup
  signupForm: FormGroup

  constructor(private formbuilder: FormBuilder) {

  }
  ngOnInit() {
    this.signinForm = this.formbuilder.group({
     
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],

    });
    

    this.signupForm = this.formbuilder.group({
      name: ['', Validators.required],
      email2: ['', Validators.required, Validators.email],
      password2: ['', Validators.required],
      ID: ['', Validators.compose([Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8)
      ])
      ],
 
    })
  }



}




import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  //create formGroup
  signinForm: FormGroup
  signupForm: FormGroup
  constructor(private formbuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {

    this.signinForm = this.formbuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });

    this.signupForm = this.formbuilder.group({
      iduser: ['',
        Validators.compose([Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
        ])
      ],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      //phone
      //date -- date picker
    })
  }

  submit() {
    //****NOTES */
    // {
    //   "username":"valeur",
    //   "email":"jjj"
    // }
    // resulat of this.signinForm.value

    // function test(){
    //oridinary function
    // }

    // ()=>{
    //arrow function
    // }
    console.log("form",this.signupForm.value)
    this.userService.create(this.signupForm.value).subscribe(
      {
        //next used when subscribtion return something
        next: (user) => { console.log("user", user) },
        //complete used when no data returend only wait for the subscribtion to complete to do something
        complete: () => { console.log("done !") },
        //error catch err in the parameter and do whatever u want
        error: (err) => { console.log("err", err) }
      }
    )

  }



}




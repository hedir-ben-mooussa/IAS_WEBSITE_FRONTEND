import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { Router, RouterConfigOptions } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private userService: UserService,
    private router:Router,
    private toasteer:ToastrService) { }

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


  login(){
    this.userService.login(this.signinForm.value).subscribe((res)=>{
      if(res){
        this.toasteer.success("welcome back","Logged In");
        this.router.navigate(['/home']);
      }else{
        this.toasteer.error("Invalid credential","Logged in failed");

      }
    })
  }


}




import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  formlogin!:FormGroup
  constructor(private fb:FormBuilder) {
   
    
   }

  ngOnInit(): void {
    this.formlogin=this.fb.group(
      {"email":["",Validators.required,Validators.email],
      "password":["",Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]
      }
     
    )
    
  
  }
  onsubmit(){
    console.log(this.formlogin)
    console.log(this.formlogin.value);

  }
  get email() {
    return this.formlogin.get('email');
  } 
}

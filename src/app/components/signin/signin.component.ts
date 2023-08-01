import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  login!:FormGroup
  constructor(private fb:FormBuilder) {
   
    
   }

  ngOnInit(): void {
    this.login=this.fb.group(
      {"email":["",Validators.required,Validators.email],
    "pswd":["",Validators.required ]}
    )

  } 

  onsubmit(){
   // console.log("hello")
   console.log(this.login)

  }
}

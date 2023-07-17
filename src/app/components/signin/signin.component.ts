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
    this.formlogin=this.fb.group(
      {"email":["",Validators.required],
      "password":["",Validators.required]
      }
    )
    
   }

  ngOnInit(): void {
  }

}

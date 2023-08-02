import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl, Form} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
 
//create formGroup
signinForm:FormGroup
signupForm:FormGroup

constructor(private formbuilder:FormBuilder){

}
  ngOnInit(){
    this.signinForm=this.formbuilder.group({
      // ' ' adhika maaneha raw input tbda fergha 
      //awl mara ken nhot feha haja taw awl ma thel form talgeha
      //validator adheka type validation required maaneha lezem tkoun maabya
      //email besh ychouf ly fy west input fyh @ wale
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],

    })
    this.signupForm=this.formbuilder.group({
      name:['',Validators.required],
      email2:['',Validators.required,Validators.email],
      password2:['',Validators.required],
      ID:['',Validators.required,Validators.maxLength(8),Validators.minLength(8)],




    })
  }

  
   
}  

  


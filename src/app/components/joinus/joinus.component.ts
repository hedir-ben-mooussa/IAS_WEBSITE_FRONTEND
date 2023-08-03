import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
joinusform:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.joinusform = this.formbuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phonenumber:['',Validators.required],
      dateofbirth:['',Validators.required],

      

    }

    )
  }

}

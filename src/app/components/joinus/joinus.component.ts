import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoinusServiceService } from 'src/app/core/services/joinus-service';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
joinusform:FormGroup
  constructor(private formbuilder:FormBuilder,
    private JoinusServiceService:JoinusServiceService) { }

  ngOnInit(): void {
    this.joinusform = this.formbuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phonenumber:['',Validators.compose([Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
        ])],
      dateofbirth:['',Validators.required],

      

    }

    )
  }
  submit(){
   console.log("form",this.joinusform.value)
   this.JoinusServiceService.create(this.joinusform.value).subscribe(
    {
      complete: () => { console.log("done !") },
      error: (err) => { console.log("erreur", err) }

    }
   )
    
   

  }

}

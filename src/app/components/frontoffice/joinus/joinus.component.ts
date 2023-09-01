import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JoinusService } from 'src/app/core/services/joinus.service';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
  joinusform: FormGroup
  constructor(
    private formbuilder: FormBuilder,
    private JoinusServiceService: JoinusService,
    private router:Router,
    private toasterService:ToastrService) { }

  ngOnInit(): void {
    this.joinusform = this.formbuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.compose([Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8)
      ])],
      dateofbirth: ['', Validators.required],
      ieee_member: ['', Validators.required]
    })
  }
  submit() {
    this.JoinusServiceService.create(this.joinusform.value).subscribe({
      complete: () => {
        
        console.log("done !");
        this.toasterService.success("you have registred to our club","Weclome")
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log("erreur", err)
      }
    })
  }

}

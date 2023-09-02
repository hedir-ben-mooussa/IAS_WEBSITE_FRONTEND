import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  addeventForm: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private eventservice: EventService,
    private toaster: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.addeventForm = this.formbuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],

    })
  }

  addEvent() {
    if(this.addeventForm.valid){
      this.eventservice.create(this.addeventForm.value).subscribe({
        complete: () => {
          this.toaster.success('event created successfully', 'success');
          this.router.navigate(['/adminpanel/events']);
        },
        error: (err) => {
          throw err;
        }
      })
    }else{
      this.toaster.error('error occur please try again', 'error');

    }
  
  }
}

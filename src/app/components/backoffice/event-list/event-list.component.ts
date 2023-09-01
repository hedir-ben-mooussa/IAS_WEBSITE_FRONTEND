import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/core/models/event';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Event[];
  subslist: Subscription
  subsdele:Subscription
  //contructor khater ytlanca howa o ngOnInit awl haja fl component doub ma thel component yetlanca onstructor mbaaed ngOnit
  constructor(private eventService: EventService,
    private toasterService:ToastrService) { }

  //ngOnInt ngOnDestroy method of life cycle compoenent also known as HOOKS
  ngOnInit(): void {
    this.subslist = this.eventService.getAllEvents().subscribe({
      next: (data: Event[]) => {
        this.events = data;
      },
      error: (err) => {
        throw err;
      }
    });

  }

  ngOnDestroy(): void {
    this.subslist.unsubscribe();
    this.subsdele.unsubscribe();
  }

  deleteEv(postId: any) {
    console.log("id",postId);

   this.eventService.deleteEvent(postId).subscribe({
      complete: () => {
        this.refresh();
        this.toasterService.success("success","done!")
      },
      error: (err) => {
        throw err;
      }
    });
  }

  refresh(){
    this.ngOnInit();
  }
}

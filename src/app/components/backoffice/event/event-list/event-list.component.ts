import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/core/models/event';
import { EventService } from 'src/app/core/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Event[];
  subslist: Subscription
  //contructor khater ytlanca howa o ngOnInit awl haja fl component doub ma thel component yetlanca onstructor mbaaed ngOnit
  constructor(private eventService: EventService,
    private toasterService: ToastrService) { }

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
  }

  deleteEv(postId: any) {
    Swal.fire({
      title: 'Are you sure want to remove this event ?',
      text: 'You will not be able to recover this event !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.eventService.deleteEvent(postId).subscribe({
          complete: () => {
            this.refresh();
            Swal.fire(
              'Deleted!',
              'Your event has been deleted.',
              'success'
            );
          },
          error: (err) => {
            throw err;
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your event is safe :)', 'error');
      }
    });

  }

  refresh() {
    this.ngOnInit();
  }
}

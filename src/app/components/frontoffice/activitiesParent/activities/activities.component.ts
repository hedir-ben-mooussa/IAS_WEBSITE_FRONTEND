import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/core/models/event';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit,OnDestroy {

  events: Event[];
  subslist: Subscription;
  isPressed:boolean=false;
  constructor(private eventService: EventService) { }

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

}

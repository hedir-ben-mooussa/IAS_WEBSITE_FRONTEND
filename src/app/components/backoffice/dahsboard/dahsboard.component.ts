import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Joinus } from 'src/app/core/models/joinus';
import { User } from 'src/app/core/models/user';
import { EventService } from 'src/app/core/services/event.service';
import { JoinusService } from 'src/app/core/services/joinus.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit, OnDestroy {
  joinsusList: Joinus[] = [];
  users: User[] = [];
  events: Event[] = [];

  listUsersSubs: Subscription;
  listeventsSubs: Subscription
  joinsusListSubs: Subscription

  constructor(
    private eventService: EventService,
    private userSerivce: UserService,
    private joinsusservice: JoinusService
  ) { }


  ngOnInit(): void {
    this.listUsersSubs = this.userSerivce.getallUsers().subscribe((data: User[]) => {
      this.users = data;
    });
    //events
    this.listeventsSubs = this.eventService.getAllEvents().subscribe((data: Event[]) => {
      this.events = data;
    });

    //joinusList
    this.joinsusListSubs = this.joinsusservice.getallStudent().subscribe((data: Event[]) => {
      this.events = data;
    });

  }

  ngOnDestroy(): void {
    this.listUsersSubs.unsubscribe();
    this.listeventsSubs.unsubscribe();
    this.joinsusListSubs.unsubscribe();
  }

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { JoinusListComponent } from './joinus-list/joinus-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClockComponent } from './shared/clock/clock.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    JoinusListComponent,
    EventListComponent,
    UserListComponent,
    ClockComponent,
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }

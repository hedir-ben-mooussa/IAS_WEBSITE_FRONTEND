import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { EventListComponent } from './event-list/event-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { JoinusListComponent } from './joinus-list/joinus-list.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';

const routes: Routes = [{
  path: '', component: BackofficeComponent, children: [
    {path:'',redirectTo:'dashboard',pathMatch: 'full'},
    { path: 'events', component: EventListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'joinusList', component: JoinusListComponent },
    { path: 'dashboard', component: DahsboardComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

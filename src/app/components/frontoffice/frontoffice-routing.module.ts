import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [{
  path: '', component: FrontofficeComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'joinus', component: JoinusComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'aboutus', component: AboutUsComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }

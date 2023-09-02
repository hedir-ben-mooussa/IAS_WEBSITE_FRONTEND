import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinusComponent } from '../joinus/joinus.component';
import { ActivitiesComponent } from './activitiesParent/activities/activities.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './activitiesParent/card/card.component';

@NgModule({
  declarations: [
    FrontofficeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    JoinusComponent,
    ActivitiesComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FrontofficeModule { }

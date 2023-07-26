import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { SigninComponent } from './components/signin/signin.component';
import { JoinusComponent } from './components/joinus/joinus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    AboutUsComponent,
    SigninComponent,
    JoinusComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

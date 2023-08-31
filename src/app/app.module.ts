import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { JoinusComponent } from './components/joinus/joinus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './components/activities/activities.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './components/contact/contact.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

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
    ActivitiesComponent,
    ContactComponent,
    EventListComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ), // ToastrModule added


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

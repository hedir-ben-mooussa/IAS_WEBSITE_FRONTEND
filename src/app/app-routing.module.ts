import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { SigninComponent } from './components/signin/signin.component';
import { JoinusComponent } from './components/joinus/joinus.component';

const routes: Routes = [
  //redirection 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'signin', component:SigninComponent},
  {path:'joinus', component:JoinusComponent},





  {path:'**', component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

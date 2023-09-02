import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { NotfoundComponent } from './components/frontoffice/shared/notfound/notfound.component';
import { JoinusComponent } from './components/joinus/joinus.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./components/frontoffice/frontoffice.module').then(m => m.FrontofficeModule) },
  { path: 'signin', component: SigninComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'adminpanel', loadChildren: () => import('./components/backoffice/backoffice.module').then(m => m.BackofficeModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

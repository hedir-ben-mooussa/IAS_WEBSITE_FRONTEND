import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JoinusComponent } from 'src/app/components/joinus/joinus.component';
import { environment } from 'src/environments/environment';
import { Joinus } from '../models/joinus';

@Injectable({
  providedIn: 'root'
})
export class JoinusServiceService {
  url:string
  

  constructor(private http:HttpClient) {
    this.url=environment.API_URL;
   }
   create(joinus:Joinus){
    return this.http.post(`${this.url}/Joinus/addstudent`,joinus);
   }
}

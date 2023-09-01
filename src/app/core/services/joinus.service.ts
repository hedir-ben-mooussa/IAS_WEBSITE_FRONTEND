import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Joinus } from '../models/joinus';

@Injectable({
  providedIn: 'root'
})
export class JoinusService {

  url:string
  
//chouf service lezem ykoun auto generee
  constructor(private http:HttpClient) {
    this.url=environment.API_URL;
   }
   create(joinus:Joinus){
    return this.http.post(`${this.url}/Joinus/addstudent`,joinus);
   }
   getallStudent(){
    return this.http.get(`${this.url}/Joinus/getall`);
   }
   deleteStudent(id:any){
    return this.http.delete(`${this.url}/Joinus/delete/${id}`);
   }
}

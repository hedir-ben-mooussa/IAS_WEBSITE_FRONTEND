import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({providedIn: 'root'})
export class UserService {
  url: string
  //inject any service this way
  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  //public by default
  create(user: User) {
    //backtick ``
    return this.http.post(`${this.url}/user/adduser`, user);
  }

  login(form:any){
    return this.http.post(`${this.url}/user/login`, form);
  }
  getallUsers(){
    return this.http.get(`${this.url}/user/getAll`);
  }
  deleteUsers(iduser:any){
    return this.http.delete(`${this.url}/user/delete/${iduser}`);
  }
}

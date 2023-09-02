import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: string
  //inject any service this way
  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }
  create(comment: Comment){
    return this.http.post(`${this.url}/comment/add`,comment);
  }
  getallComments(){
    return this.http.get(`${this.url}/comment/getallc`);
  }
  deleteComments(id:any){
    return this.http.delete(`${this.url}/comment/delete/${id}`);
  }

}

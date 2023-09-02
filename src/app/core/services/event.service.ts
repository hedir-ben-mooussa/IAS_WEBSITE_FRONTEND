import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  url: string
  //inject any service this way
  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  create(form: any) {
    return this.http.post(`${this.url}/event/addevent`, form)
  }
  getAllEvents() {
    return this.http.get(`${this.url}/event/getall`);
  }
  deleteEvent(postId: any) {
    return this.http.delete(`${this.url}/event/delete/${postId}`);

  }

}

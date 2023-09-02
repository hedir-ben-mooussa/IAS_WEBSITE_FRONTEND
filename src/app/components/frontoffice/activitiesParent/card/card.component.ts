import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() event:Event;
   isPressed:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleComment(){
    this.isPressed=!this.isPressed
  }
}

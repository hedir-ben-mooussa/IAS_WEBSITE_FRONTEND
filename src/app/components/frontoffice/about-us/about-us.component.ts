import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent  {
  //this is a variable that hold number
  yearcount:number = 0;
  //same process
  memberscount:number = 0;
  TAMcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  yearcountstop:any = setInterval(()=>{
    this.yearcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.yearcount ==3)
    {
      //clearinterval will stop tha function
      clearInterval(this.yearcountstop);
    }

  },500) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.memberscount++;
    if(this.memberscount == 35)
    {

      clearInterval(this.accuratecountstop);
    }
  },100) 


  TAMcountstop:any = setInterval(()=>{
    this.TAMcount++;
    if(this.TAMcount == 3  )
    {

      clearInterval(this.TAMcountstop);
    }
  },500)

  //customerfeedbackstop:any = setInterval(()=>{
    //this.customerfeedback++;
    //if(this.customerfeedback == 100)
    //{

      //clearInterval(this.customerfeedbackstop);
   // }
  //},10)

  //conclusion: we have use
  //string interpolation
  //setInterval function
  //()=> arrow function
  //clearInterval 
  //creating variable



}
 


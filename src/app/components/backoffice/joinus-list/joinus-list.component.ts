import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Joinus } from 'src/app/core/models/joinus';
import { JoinusService } from 'src/app/core/services/joinus.service';

@Component({
  selector: 'app-joinus-list',
  templateUrl: './joinus-list.component.html',
  styleUrls: ['./joinus-list.component.css']
})
export class JoinusListComponent implements OnInit {
joinuslist: Joinus[];
subsJoin:Subscription
subsDelJoin:Subscription

  constructor(private joinusService: JoinusService,
    private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.subsJoin = this.joinusService.getallStudent().subscribe({
      next : (data: Joinus[]) => {
        this.joinuslist=data;
      },
      error: (err)=>{
        throw err;
      }
    });

  }
  deletJoin(id:any){
    this.joinusService.deleteStudent(id).subscribe({
      complete: ()=>{
        this.refresh();
        this.toasterService.success("Deletion has been successfully completed","Success!")

      },
      error :(err) => {
        throw err;
        
      }
      
    })
  }
refresh(){
  this.ngOnInit();
}
}

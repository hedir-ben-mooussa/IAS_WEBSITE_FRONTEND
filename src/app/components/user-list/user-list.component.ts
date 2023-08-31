import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy {
user: User[];
subsUser:Subscription
subsDelUser:Subscription
  constructor(private usersevice: UserService,
    private toasterService:ToastrService) { }
  

  ngOnInit(): void {
    this.subsUser = this.usersevice.getallUsers().subscribe({
      next: (data:User[]) =>{
        this.user = data;
      },
      error: (err) =>{
        throw err;
      }
    });
  }
  deleteUser(iduser:any){
    this.usersevice.deleteUsers(iduser).subscribe({
      complete: () =>{
        this.refresh();
        this.toasterService.success("Deletion has been successfully completed","Success!")
      },
      error:(err)=>{
        throw err;
      }
    });
  }
  ngOnDestroy(): void {
    this.subsUser.unsubscribe();
    this.subsDelUser.unsubscribe();
  }
  refresh(){
    this.ngOnInit();
  }

}

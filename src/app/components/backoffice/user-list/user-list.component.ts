import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  user: User[];
  subsUser: Subscription
  constructor(private usersevice: UserService,
    private toasterService: ToastrService) { }


  ngOnInit(): void {
    this.subsUser = this.usersevice.getallUsers().subscribe({
      next: (data: User[]) => {
        this.user = data;
      },
      error: (err) => {
        throw err;
      }
    });
  }
  deleteUser(iduser: any) {
    Swal.fire({
      title: 'Are you sure want to remove this user ?',
      text: 'You will not be able to recover this user !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.usersevice.deleteUsers(iduser).subscribe({
          complete: () => {
            this.refresh();
            Swal.fire(
              'Deleted!',
              'Your user has been deleted.',
              'success'
            );
          },
          error: (err) => {
            throw err;
          }
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your user is safe :)', 'error');
      }
    });


  }
  ngOnDestroy(): void {
    this.subsUser.unsubscribe();

  }
  refresh() {
    this.ngOnInit();
  }

}

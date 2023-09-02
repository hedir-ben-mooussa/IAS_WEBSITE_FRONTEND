import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Joinus } from 'src/app/core/models/joinus';
import { JoinusService } from 'src/app/core/services/joinus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-joinus-list',
  templateUrl: './joinus-list.component.html',
  styleUrls: ['./joinus-list.component.css']
})
export class JoinusListComponent implements OnInit, OnDestroy {
  joinuslist: Joinus[];
  subsJoin: Subscription

  constructor(private joinusService: JoinusService) { }

  ngOnDestroy(): void {
    this.subsJoin.unsubscribe
  }

  ngOnInit(): void {
    this.subsJoin = this.joinusService.getallStudent().subscribe({
      next: (data: Joinus[]) => {
        this.joinuslist = data;
      },
      error: (err) => {
        throw err;
      }
    });

  }

  deletJoin(id: any) {
    Swal.fire({
      title: 'Are you sure want to remove this student ?',
      text: 'You will not be able to recover this student !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.joinusService.deleteStudent(id).subscribe({
          complete: () => {
            this.refresh();
            Swal.fire(
              'Deleted!',
              'Your student has been deleted.',
              'success'
            );
          },
          error: (err) => {
            throw err;
          }
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your student is safe :)', 'error');
      }
    });

  }
  refresh() {
    this.ngOnInit();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private adminservice: AdminserviceService, private toastr :ToastrService) {}
  searchText!: string;
  institutes ?: Institute[];

  ngOnInit(): void {
    this.getallInstitutes();
  }

  //get the list of institutes
  getallInstitutes()
  {
     this.adminservice.viewInstitute().subscribe(data =>{
     this.institutes = data;
     console.log(this.institutes);
    })
  }

  //send the instituteId to editinstitute component
  editInstitute(instituteId : number)
  {
    this.router.navigate(['/admin/editinstitute',instituteId]);
  }

  //Redirect to the course with institute id
  gotoCourse(instituteId:number)
  {
    this.router.navigate(['/admin/course',instituteId]);
  }

  //for delete popup modal
  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  delete(instituteId : number)
  {
      this.modalService.dismissAll();
        this.adminservice.deleteInstitute(instituteId).subscribe(data =>
          {
            console.log(instituteId);
            this.toastr.success('Institute Deleted Sucessfully!', 'Institute status !');
            this.getallInstitutes();
        });

    }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Institute } from 'src/app/class/institute';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private userservice: UserserviceService, private toastr :ToastrService) {}
  searchText!: string;
  institutes ?: Institute[];

  ngOnInit(): void {
    this.getallInstitutes();
  }

  gotocourse(instituteId:number): void {
    this.router.navigate(['/user/courses',instituteId]);
  }
  //get the list of institutes
  getallInstitutes()
  {
     this.userservice.viewInstitute().subscribe(data =>{
     this.institutes = data;
     console.log(this.institutes);
    })
  }

}

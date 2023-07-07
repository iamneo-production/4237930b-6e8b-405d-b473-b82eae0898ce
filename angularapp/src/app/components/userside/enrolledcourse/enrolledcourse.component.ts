import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { Admission } from 'src/app/class/admission';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  userId: number;
  admission:Admission[];

  constructor(private modalService: NgbModal,private authservices: AuthService,private userservice: UserserviceService,private router:Router) {}

  ngOnInit(): void {  
    this.userId = this.authservices.getUserId();
    console.log(this.userId);
    this.getallAdmission();

  }

  getallAdmission()
  {
     this.userservice.getByUserId(this.userId).subscribe(data =>{
     this.admission = data;
     console.log(this.admission);
    })
  }
  
 
  //for delete popup modal
  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
  
  //delete the admission by admission id
  delete(): void {
    this.modalService.dismissAll();
  }

  //redirect to status page with admission ID
  gotoStatus(admissionId:number): void {
    this.router.navigate(['/user/status',admissionId]);
    console.log(admissionId);
  }



}

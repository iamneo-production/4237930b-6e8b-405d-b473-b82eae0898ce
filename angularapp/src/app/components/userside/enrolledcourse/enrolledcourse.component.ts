import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { Admission } from 'src/app/class/admission';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  userId: number;
  admission:Admission[];
  courseList = [];

  constructor(private modalService: NgbModal,private authservices: AuthService,private userservice: UserserviceService,private router:Router, private toastr :ToastrService) {}

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

     //for retriving the course details
     this.admission.forEach((value , index)=> {
      this.userservice.getCourseById(value.courseId).subscribe(data => {
        this.addcourse(data.courseName);
        });
      });
    })
  }

  addcourse(courseName:string): void{
    this.courseList.push(courseName);
  }
  
  //for delete popup modal
  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
  
  //redirect to status page with admission ID
  gotoStatus(admissionId:number): void {
    this.router.navigate(['/user/status',admissionId]);
    console.log(admissionId);
  }

  //redirect to edit student page with admission ID
  gotoEditAdmission(admissionId:number): void {
    this.router.navigate(['/user/editadmission',admissionId]);
    console.log(admissionId);
  }

  //delete the admission by admission id
  delete(admissionId : number,courseId: number)
  {
      this.modalService.dismissAll();
        this.userservice.deleteAdmission(admissionId).subscribe(data =>
          {
            this.toastr.info('Admission Deleted Sucessfully!', 'Admission status !');
            this.userservice.decrementStudents(courseId).subscribe(data =>
              {
                console.log(data);
              });
    
            this.getallAdmission();
        });  
    }

}

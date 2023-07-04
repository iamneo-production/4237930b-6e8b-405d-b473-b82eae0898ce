import { Component, OnInit } from '@angular/core';
import { EnrollCourse } from 'src/app/class/enrollCourse';
import { Course } from 'src/app/class/Course';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/authservice/auth.service';


@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {
  public CourseName: any;
  public JoinDate: any;
  public CourseEndDate: any;

  userId: number;

  constructor(private modalService: NgbModal,private authservices: AuthService) {}

  ngOnInit(): void {  
    this.userId = this.authservices.getUserId();
    console.log(this.userId);
  }

  enrollcourse:EnrollCourse[]=[

    new EnrollCourse("M.E(VSI)","10/12/2022","10/10/2023"),
    new EnrollCourse("B.Tech(VSI)","21/1/2023","20/12/2024"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023")

  ];
 
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

}

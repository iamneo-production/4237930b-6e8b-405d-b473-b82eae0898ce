import { Component, OnInit } from '@angular/core';
import { EnrollCourse } from 'src/app/class/enrollCourse';
import { Course } from 'src/app/class/Course';

@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {
  public CourseName:any;
  public JoinDate:any;
  public CourseEndDate:any;

  constructor() {

   }

  ngOnInit(): void {
    
  }

  enrollcourse:EnrollCourse[]=[

    new EnrollCourse("M.E(VSI)","10/12/2022","10/10/2023"),
    new EnrollCourse("B.Tech(VSI)","21/1/2023","20/12/2024"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023")

  ];
  /*
  course:Course[]=[

    new Course("P.H.D(IIT)","12/110/2020","11/11/2023"),
    new Course("B.S.C(BIT)","1/1/2022","2/1/2025"),
    new Course("M.S.C(VSE)","26/3/2023","3/7/2023"),
    new Course("M.E(VSI)","6/6/2021","25/5/2022"),
    new Course("M.TECH(RMK)","7/10/2024","10/7/2025")

  ];
  */

}

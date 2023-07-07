import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/class/Course';
import { Students } from 'src/app/class/Student';
import { Admission } from 'src/app/class/admission';
import { Institute } from 'src/app/class/institute';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  searchText!: string;

  institute : Institute = new Institute();
  course : Course=new Course();
  students:Students=new Students();
  admissionId:number;
  admission:Admission=new Admission();
 

  constructor(private userservice:UserserviceService,private route:ActivatedRoute ) {}

  ngOnInit(): void {

    this.admissionId = this.route.snapshot.params['admissionId'];
    console.log(this.admissionId);
    this.userservice.getAdmissionById(this.admissionId).subscribe(data => {
          this.admission = data;
          console.log(this.admission);
          this.getInstitute(this.admission.instituteId);
          this.getCourse(this.admission.courseId);
          this.getStudent(this.admission.studentId);
    });

    
  }

  getInstitute(instituteId:number){
    console.log(instituteId);
    this.userservice.getInstituteById(instituteId).subscribe(data => {
          this.institute = data;
    });

  }

  getCourse(courseId:number){
    console.log(courseId);
    this.userservice.getCourseById(courseId).subscribe(data => {
          this.course = data;
    });

  }

  getStudent(studentId:number){
    console.log(studentId);
    this.userservice.getStudentById(studentId).subscribe(data => {
          this.students = data;
    });

  }

}

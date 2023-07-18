import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/class/Course';
import { Students } from 'src/app/class/Student';
import { Admission } from 'src/app/class/admission';
import { Institute } from 'src/app/class/institute';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-editadmission',
  templateUrl: './editadmission.component.html',
  styleUrls: ['./editadmission.component.css']
})
export class EditadmissionComponent implements OnInit {

  constructor(private router:Router,private userservice:UserserviceService,private route:ActivatedRoute, private toastr :ToastrService){}

  student : Students = new Students();
  admission : Admission = new Admission();
  institute : Institute = new Institute();
  selectedcourse : Course = new Course();
  admissionId !:number;

  institutes: Institute[] =[];
  courses: Course[] =[];
  date = new Date();

  ngOnInit(): void {
    this.admissionId = this.route.snapshot.params['admissionId'];
    this.userservice.getAdmissionById(this.admissionId).subscribe(data => {
          this.admission = data;
          this.getInstitute(this.admission.instituteId);
          this.getCourse(this.admission.courseId);
          this.getStudent(this.admission.studentId);
          this.getCourseList(this.admission.instituteId);
    });
  }

  getInstitute(instituteId:number){
    this.userservice.getInstituteById(instituteId).subscribe(data => {
          this.institute = data;
    });
  }

  getCourse(courseId:number){
    this.userservice.getCourseById(courseId).subscribe(data => {
          this.selectedcourse = data;
    });
  }

  getStudent(studentId:number){
    this.userservice.getStudentById(studentId).subscribe(data => {
          this.student = data;
    });

  }

  // get all the courses according to institutes for dropdown
  getCourseList(instituteId:number): void {
    this.userservice.viewCoursesFromInstitute(instituteId).subscribe(data => {
      console.log(data);
      this.courses= data;
    })
  }

  //To update all the details(student and admission details)
  submit(): void {
    console.log(this.student,this.admission);
    this.updateStudent()
    this.updateAdmission();
    this.gotoEnrolledCoursePage();
  }

  // updating the course details in the admission tables
  setAdmissionDetails(Data:any)
  {
    this.decrementStudentsCount(this.selectedcourse.courseId);
    this.userservice.getCourseById(Data.target.value).subscribe(data => {
      console.log(data);
      this.student.courseName = data.courseName;
      this.admission.courseId = data.courseId;
      this.addYears(new Date(),data.courseDuration);
      this.incrementStudentsCount(this.admission.courseId);
      });
    console.log(this.admission);
    
  }

  // course start date and end date calculation
  addYears(date :Date, years : number) {
    date.setFullYear(date.getFullYear() + years);
    this.admission.courseStartDate = new Date();
    this.admission.courseEndDate = date;
  }

 //updating the existing student
 updateStudent(): void {
  this.userservice.editStudent(this.student.studentId,this.student).subscribe({
    next:()=>console.log('updating'),
    error:()=>console.log('Error while updating'),
    complete:()=>{
      this.toastr.info('Admission Updated Sucessfully!', 'Admission status !');
    }
    });
}

//updating the existing admission
updateAdmission(): void {
    this.userservice.editAdmission(this.admissionId,this.admission).subscribe({
        next:()=>console.log('updating'),
        error:()=>console.log('Error while updating'),
     });
 }

  //To navigate to the enrolled course Page
  gotoEnrolledCoursePage(): void {
    this.router.navigate(['/user/enrolledcourse']);
}

//decrement the oldCourse students count
decrementStudentsCount(courseId:number)
{
  this.userservice.decrementStudents(courseId).subscribe(data => {
    console.log(data);
  });
}

//increment the oldCourse students count
incrementStudentsCount(courseId:number)
{
  this.userservice.incrementStudents(courseId).subscribe(data => {
    console.log(data);
  });
}

}

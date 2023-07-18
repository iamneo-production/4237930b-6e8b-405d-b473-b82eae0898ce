import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/class/Course';
import { Students } from 'src/app/class/Student';
import { Admission } from 'src/app/class/admission';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute, private toastr :ToastrService){}

  newstudent : Students = new Students();
  admission : Admission = new Admission();
  studentId !:number;
  admissionId !:number;
  institutes: Institute[] =[];
  courses: Course[] =[];
  date = new Date();

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    console.log(this.studentId);
    this.adminservice.getStudentById(this.studentId).subscribe(data => {
          this.newstudent = data;
    });
    this.getOldAdmission();
    this.getallInstitutes();
  }

// retriving the old admission details
getOldAdmission()
{
  this.adminservice.getAdmissionByStudentId(this.studentId).subscribe(data => {
    console.log(data);
    this.admission= data;
  })
}


// get all the courses according to institutes for dropdown
  getCourseList(institute: any): void {
    console.log(institute.target.value);
    this.admission.instituteId = institute.target.value;
    this.adminservice.viewCoursesFromInstitute(this.admission.instituteId).subscribe(data => {
      console.log(data);
      this.courses= data;
    })
  }

  //initializing the courseid to the admission data
  setCourseId(courseId: any) {
    this.decrementStudentsCount(this.admission.courseId);
    this.admission.courseId = courseId.target.value;
    this.getCoursedata(this.admission.courseId);
    // console.log(this.admission.courseId);
    this.incrementStudentsCount(this.admission.courseId);
  }

  //decrement the oldCourse students count
  decrementStudentsCount(courseId:number)
  {
    this.adminservice.decrementStudents(courseId).subscribe(data => {
      console.log(data);
    });
  }

  //increment the oldCourse students count
  incrementStudentsCount(courseId:number)
  {
    this.adminservice.incrementStudents(courseId).subscribe(data => {
      console.log(data);
    });
  }
  
    // get all the institutes for dropdown
    getallInstitutes() {
       this.adminservice.viewInstitute().subscribe(data =>{
       this.institutes = data;
       console.log(this.institutes);
        })
    }

    // get the selected course data
    getCoursedata(instituteId: number): void {
      this.adminservice.getCourseById(instituteId).subscribe(data => {
          console.log(data);
          this.admission.courseStartDate = this.date;
          this.addYears(new Date(),data.courseDuration);
          this.newstudent.courseName = data.courseName;
        })
    }

      //To update the student
      submit(): void {
        console.log(this.newstudent);
        this.adminservice.editStudent(this.studentId,this.newstudent).subscribe({
          next:()=>console.log('updating'),
          error:()=>console.log('Error while updating'),
          complete:()=>{
            this.toastr.success('Student and Course Updated Sucessfully!', 'Student status !');
            this.updateAdmission();
            this.gotoStudentsPage();
          }
        })
      }

      updateAdmission()
      {
        console.log(this.admission);
        this.admissionId = this.admission.admissionId;
        this.adminservice.editAdmission(this.admissionId,this.admission).subscribe({
        error:()=>console.log("error") });
      }

      //To navigate to the institute Page
      gotoStudentsPage(): void {
          this.router.navigate(['/admin/students']);
      }

      addYears(date :Date, years : number) {
        date.setFullYear(date.getFullYear() + years);
        this.admission.courseEndDate = date;
        console.log(this.admission);
      }
}

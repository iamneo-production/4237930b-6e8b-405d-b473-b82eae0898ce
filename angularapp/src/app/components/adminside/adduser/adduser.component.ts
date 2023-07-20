import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Students } from 'src/app/class/Student';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';
import { Admission } from 'src/app/class/admission';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/authservice/auth.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {

  newstudent: Students = new Students();
  newadmission : Admission = new Admission();
  institutes: Institute[] =[];
  courses: Course[] =[];
  courseName :string;
  date = new Date();
  
  constructor(private adminservice:AdminserviceService, private router: Router,private toastr :ToastrService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.getallInstitutes();
    this.newadmission.courseStartDate = this.date;
    // console.log(this.newadmission.courseStartDate);
    this.newadmission.userId=this.authservice.getUserId();
    console.log(this.newadmission.userId);

  }

  // get all the courses according to institutes for dropdown
  getCourseList(institute: any): void {
    console.log(institute.target.value);
    this.newadmission.instituteId = institute.target.value;
    this.getCourses(this.newadmission.instituteId);
  }

  //initializing the courseid to the admission data
  setCourseId(courseId: any) {
    this.newadmission.courseId = courseId.target.value;
    this.getCoursedata(this.newadmission.courseId);
    console.log(this.newadmission.courseId);
  }

    // get the courses according to the institutes from dropdown
    getCourses(instituteId: number): void {
      this.adminservice.viewCoursesFromInstitute(instituteId).subscribe(data => {
          console.log(data);
          this.courses= data;
        })
    }

    // get all the institutes for dropdown
    getallInstitutes()
    {
      this.adminservice.viewInstitute().subscribe(data =>{
      this.institutes = data;
      console.log(this.institutes);
      })
    }

    // get the selected course data
    getCoursedata(courseId: number): void {
      this.adminservice.getCourseById(courseId).subscribe(data => {
          console.log(data);
          this.courseName = data.courseName;
          this.addYears(new Date(),data.courseDuration);
        })
    }

    loginForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required]),
        mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        sslc: new FormControl('',[Validators.required]),
        gender: new FormControl('',[Validators.required,Validators.pattern('^M(ale)?$|^F(emale)?$|^m(ale)?$|^f(emale)?$')]),
        fatherName: new FormControl('',[Validators.required]),
        motherName: new FormControl('',[Validators.required]),
        altMobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        emailId: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        houseNo: new FormControl('',[Validators.required]),
        streetName: new FormControl('',[Validators.required]),
        areaName: new FormControl('',[Validators.required]),
        pincode: new FormControl('',[Validators.required]),
        nationality: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
  })

  submit()
  {
    this.newstudent = this.loginForm.value;
    this.newstudent.courseName = this.courseName;
    console.log(this.newstudent);
    this.addStudent();
  }

  //for adding student details
  addStudent(): void {
    this.adminservice.addStudent(this.newstudent).subscribe(data =>
      {
        this.newadmission.studentId = data.studentId;
        this.addAdmission();
        this.updateEnrolledStudents(this.newadmission.courseId);
      })
  }

  //for adding the admission for the student
  addAdmission(): void {
    this.newadmission.status = "Application received";
    console.log(this.newadmission);
    this.adminservice.addAdmission(this.newadmission).subscribe(data =>
      {
        this.toastr.success('Registered Sucessfully!', 'Student and Course Details !');
        this.router.navigate(['/admin/students']);
      })
  }

  get firstName()
  {
    return this.loginForm.get('firstName')
  }

  get fatherName()
  {
    return this.loginForm.get('fatherName')
  }

  get motherName()
  {
    return this.loginForm.get('motherName')
  }

  get emailId()
  {
    return this.loginForm.get('emailId')
  }

  get age()
  {
    return this.loginForm.get('age')
  }

  get sslc()
  {
    return this.loginForm.get('sslc')
  }

  get lastName()
  {
    return this.loginForm.get('lastName')
  }

  get mobile()
  {
    return this.loginForm.get('mobile')
  }

  get gender()
  {
    return this.loginForm.get('gender')
  }

  get altMobile()
  {
    return this.loginForm.get('altMobile')
  }

  get houseNo()
  {
    return this.loginForm.get('houseNo')
  }

  get streetName()
  {
    return this.loginForm.get('streetName')
  }

  get areaName()
  {
    return this.loginForm.get('areaName')
  }

  get pincode()
  {
    return this.loginForm.get('pincode')
  }

  get state()
  {
    return this.loginForm.get('state')
  }

  get nationality()
  {
    return this.loginForm.get('nationality')
  }

  get institute()
  {
    return this.loginForm.get('institute')
  }

  get course()
  {
    return this.loginForm.get('course')
  }

  addYears(date :Date, years : number) {
    date.setFullYear(date.getFullYear() + years);
    this.newadmission.courseEndDate = date;
    console.log(this.newadmission);
  }

  //incrementing students enrolled count
  updateEnrolledStudents(courseId:number): void {
    this.adminservice.incrementStudents(courseId).subscribe(data =>
      { 
        console.log(data);
      }
      )
   }

}

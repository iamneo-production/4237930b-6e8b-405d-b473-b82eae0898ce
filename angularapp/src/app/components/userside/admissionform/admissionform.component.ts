import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { Students } from 'src/app/class/Student';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { Admission } from 'src/app/class/admission';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {

  constructor(private route:ActivatedRoute,private authservice:AuthService,private toastr :ToastrService,private userservice:UserserviceService,private router:Router) { }
  courseId:number;
  instituteId:number;
  userId:number;
  courseName:string;
  newStudent:Students=new Students();
  newAdmission:Admission=new Admission();
  submitstatus:Boolean = false;  

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    this.instituteId = this.route.snapshot.params['instituteId'];
    this.userId=this.authservice.getUserId();
    this.newAdmission.status = "Application received";
    this.newAdmission.courseId=this.courseId;
    this.newAdmission.instituteId=this.instituteId;
    this.newAdmission.userId=this.userId;
    this.newAdmission.courseStartDate=new Date();
    this.getCoursedata(this.courseId);
    this.checkStudentdetails(this.userId);

  }

  loginForm = new FormGroup({
    studentId: new FormControl('',),
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
    courseName: new FormControl('',),
    userId: new FormControl('',)
})

  loginUser()
  {
    console.warn(this.loginForm.value)
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
submit()
{
  this.newStudent=this.loginForm.value;
  this.newStudent.courseName=this.courseName;
  this.newStudent.userId = this.userId;
  console.log(this.newStudent);
  
  if(this.checkStudentdetails(this.userId)) {
    this.updateStudent();
    }
  else {
    this.addStudent();
  }
 
}

    // get the selected course data
    getCoursedata(courseId: number): void {
      this.userservice.getCourseById(courseId).subscribe(data => {
          console.log(data);
          this.courseName = data.courseName;
          this.addYears(new Date(),data.courseDuration);
        })
    }

    //course Start date and end date caluculation
    addYears(date :Date, years : number) {
      date.setFullYear(date.getFullYear() + years);
      this.newAdmission.courseEndDate = date;
      console.log(this.newAdmission);
    }

  //for adding student details
  addStudent(): void {
    this.userservice.addStudent(this.newStudent).subscribe(data =>
      {
        this.newAdmission.studentId = data.studentId;
        this.addAdmission();
        this.updateEnrolledStudents();
      })
    }

  //for adding the admission for the student
  addAdmission(): void {
    console.log(this.newAdmission);
    this.userservice.addAdmission(this.newAdmission).subscribe(data =>
      {
        this.toastr.info('Registered Sucessfully!', 'Course and Student Details !');
        this.router.navigate(['/user/institute']);
      })
   }

   //check the student details available or not
    checkStudentdetails(userId:number): any {
      this.userservice.getStudentByUserId(this.userId).subscribe(data => {
        if(data != null) {
            this.loginForm.setValue(data);
            this.submitstatus= true;
            console.log(this.submitstatus);
            return true;
          }
          return false;
        })
    }

    //updating the existing student
    updateStudent(): void {
      this.userservice.editStudent(this.newStudent.studentId,this.newStudent).subscribe(data => {
        this.toastr.info('Admission Updated Sucessfully!', 'Admission status !');
        },error => console.log(error));
        this.addAdmission();
     }
 
     //incrementation
     updateEnrolledStudents(): void {
      this.userservice.incrementStudents(this.courseId).subscribe(data =>
        { 
          console.log(data);
        }
        )
     }

}

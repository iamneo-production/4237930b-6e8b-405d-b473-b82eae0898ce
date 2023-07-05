import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Students } from 'src/app/class/Student';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newstudent: Students = new Students();
  institutes: Institute[] =[];
  courses: Course[] =[];



  constructor(private adminservice:AdminserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getallInstitutes();
  }


  // getCourses(){
  //   this.adminservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>
  //     {
  //       console.log(data);
  //       this.courses= data;
  
  //     })

  // }

  getallInstitutes()
  {
     this.adminservice.viewInstitute().subscribe(data =>{
     this.institutes = data;
     console.log(this.institutes);
    })
  }

  loginForm = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    fatherName:new FormControl('',[Validators.required]),
    motherName:new FormControl('',[Validators.required]),
    emailId:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    age:new FormControl('',[Validators.required]),
    sslc:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    gender:new FormControl('',[Validators.required,Validators.pattern('^M(ale)?$|^F(emale)?$|^m(ale)?$|^f(emale)?$')]),
    altMobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    houseNo:new FormControl('',[Validators.required]),
    streetName:new FormControl('',[Validators.required]),
    areaName:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    nationality:new FormControl('',[Validators.required]),
    // institute:new FormControl('',[Validators.required]),
    // course:new FormControl('',[Validators.required])

  })

  loginUser(val1:string, val2:string)
  {
    console.log(val1,val2);
    //console.warn(this.loginForm.value)
    this.addStudent();
    console.log(this.newstudent);

  }

  //for adding student details
  addStudent(): void {
    this.adminservice.addStudent(this.newstudent).subscribe(data =>
      {
        console.log(data);
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


}

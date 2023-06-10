import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    fatherName:new FormControl('',[Validators.required]),
    motherName:new FormControl('',[Validators.required]),
    emailId:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    age:new FormControl('',[Validators.required]),
    'enterSSLC/HSCMarks':new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    phoneNumber1:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'male/female':new FormControl('',[Validators.required,Validators.pattern('^M(ale)?$|^F(emale)?$|^m(ale)?$|^f(emale)?$')]),
    phoneNumber2:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    houseNo:new FormControl('',[Validators.required]),
    streetName:new FormControl('',[Validators.required]),
    areaName:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    nation:new FormControl('',[Validators.required])

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

  get enterSSLCHSCMarks()
  {
    return this.loginForm.get('enterSSLC/HSCMarks')
  }

  get lastName()
  {
    return this.loginForm.get('lastName')
  }

  get phoneNumber1()
  {
    return this.loginForm.get('phoneNumber1')
  }

  get malefemale()
  {
    return this.loginForm.get('male/female')
  }

  get phoneNumber2()
  {
    return this.loginForm.get('phoneNumber2')
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

  get nation()
  {
    return this.loginForm.get('nation')
  }


}

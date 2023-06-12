import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText!:string;

  students =[
    {
      'studentId': 1232213,
      'studentName': 'Anil',
      'enrolledCourse': 'Boxing Drills',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2238631,
      'studentName': 'Sai',
      'enrolledCourse': 'Strength Training',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Manoj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    }
  ]

  addStudent(){
    this.students.push({
      'studentId': 19003144,
      'studentName': 'Deepika',
      'enrolledCourse': 'Frontend',
      'mobileNumber': 8096254335,
    })
  }

  deleteStudent(){
    this.students.pop();
  }

}

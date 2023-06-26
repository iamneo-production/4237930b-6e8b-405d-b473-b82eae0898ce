import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

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

  //for delete popup modal
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  deleteStudent()
  {
      this.modalService.dismissAll();
      this.students.pop();
  }

}

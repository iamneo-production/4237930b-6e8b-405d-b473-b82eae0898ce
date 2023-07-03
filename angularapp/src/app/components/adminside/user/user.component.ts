import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Students } from 'src/app/class/Student';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private modalService: NgbModal,private router: Router,private adminservice :AdminserviceService) { }

  ngOnInit(): void {
    this.getallStudents();
    console.log("Hi");
  }
  
  searchText!:string;

  students ?:Students[];

  getallStudents()
    {
        this.adminservice.viewStudents().subscribe(data =>{
        this.students = data;
        console.log(this.students);
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

  //redirect to editstudent page with studentId
  editStudent(studentId : number)
  {
    this.router.navigate(['/admin/editstudent',studentId]);
  }
  deleteStudent()
  {
      this.modalService.dismissAll();
      this.students.pop();
  }

}

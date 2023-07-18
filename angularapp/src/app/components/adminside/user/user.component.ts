import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Students } from 'src/app/class/Student';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private modalService: NgbModal,private router: Router,private adminservice :AdminserviceService, private toastr :ToastrService) { }

  ngOnInit(): void {
    this.getallStudents();
  }
  
  searchText!:string;
  students ?:Students[];

  getallStudents()
  {
    this.adminservice.viewStudents().subscribe(data =>{
    this.students = data;
    // console.log(this.students);
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

  deleteStudent(studentId : number)
  {
    this.adminservice.deleteStudent(studentId).subscribe(data => {
      // console.log(data);
      this.modalService.dismissAll();
      this.toastr.success('deleted Sucessfully!', 'Student Details !');
      
      this.adminservice.getAdmissionByStudentId(studentId).subscribe(data => {

        //Delete the admission 
        this.adminservice.deleteAdmission(data.admissionId).subscribe(data =>{
          console.log(data);
        })

        //decrement the enrolledCourse students count
        this.adminservice.decrementStudents(data.courseId).subscribe(data => {
          console.log(data);
        });
      })
      this.getallStudents();
    })
    
  }

}

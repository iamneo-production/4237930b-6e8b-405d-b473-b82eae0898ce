import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';

import { FormControl,FormGroup,NgModel,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Students } from 'src/app/class/Student';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute, private toastr :ToastrService){}

  newstudent : Students = new Students();
  studentId !:number;

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    console.log(this.studentId);
    this.adminservice.getStudentById(this.studentId).subscribe(data => {
          this.newstudent = data;
    });
  }

  //To add the New institute
  loginUser(): void {
    this.adminservice.editStudent(this.studentId,this.newstudent).subscribe(data => {
      this.toastr.warning('Student Updated Sucessfully!', 'Student status !');
      },error => console.log(error));
      this.gotoStudentsPage();
  }

  //To navigate to the institute Page
  gotoStudentsPage(): void {
      this.router.navigate(['/admin/students']);
  }
}

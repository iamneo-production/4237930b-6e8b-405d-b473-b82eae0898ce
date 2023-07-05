import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService) { }

  course : Course = new Course();
  instituteId !:number;

  ngOnInit(): void {

    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
  }

  onSubmit()
  {
    console.log(this.course);
    this.addCourse();
  }

  addCourse()
  {
    this.course.instituteId = this.instituteId;
    this.adminservice.addCourse(this.course).subscribe(data =>
      {
        console.log(data);
        this.toastr.warning("Course for the Institute added Sucessfully");
      },error => console.log(error));
        this.router.navigate(['/admin/course',this.instituteId]);
      }
   }
  


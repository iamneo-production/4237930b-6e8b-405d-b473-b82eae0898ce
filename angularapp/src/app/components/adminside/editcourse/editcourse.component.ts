import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/class/Course';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService) { }
  courseId !:number;
  course : Course = new Course();
  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    console.log(this.courseId);
    

    this.adminservice.getCourseById(this.courseId).subscribe(data =>
      {
          this.course = data;
      });
 
  }
  

  onSubmit() {
     // display form values on success
    this.adminservice.editCourse(this.courseId,this.course).subscribe({
      next:()=>console.log('updating'),
      error:()=>console.log('Error while updating'),
      complete:()=>{
        this.toastr.success('Course Updated Sucessfully!', 'Course status !');
        console.log('Updated');
        this.gotoCoursePage();
        }
      })
}


gotoCoursePage()
  {
    this.router.navigate(['/admin/course',this.course.instituteId]);
  }
  

  

}

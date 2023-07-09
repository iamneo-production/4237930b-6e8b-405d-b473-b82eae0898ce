import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/class/Course';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService) { }
  
  courseId !:number;
  course : Course = new Course();
  submitted=false;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    console.log(this.courseId);
    

    this.adminservice.getCourseById(this.courseId).subscribe(data =>
      {
          this.course = data;
      });
 
  }
  editcourseForm= new FormGroup({
    courseName: new FormControl('',[Validators.required]),
    courseDuration: new FormControl('',[Validators.required]),
    courseTiming:new FormControl('',[Validators.required]),
    enrolledStudents:new FormControl('',[Validators.required]),
    courseDescription:new FormControl('',[Validators.required]),
})

get courseName()
  {
    return this.editcourseForm.get('courseName')
  }
  get courseDuration()
  {
    return this.editcourseForm.get('courseDuration')
  }
  get courseTiming()
  {
    return this.editcourseForm.get('courseTiming')
  }
  get enrolledStudents()
  {
    return this.editcourseForm.get('enrolledStudents')
  }
  get courseDescription()
  {
    return this.editcourseForm.get('courseDescription')
  }
  
  
  

  onSubmit() {
    this.submitted = true;
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

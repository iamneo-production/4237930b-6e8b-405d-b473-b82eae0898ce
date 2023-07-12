import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService) { }

  course : Course = new Course();
  instituteId !:number;
  submitted = false;

  ngOnInit(): void {

    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
  }
  addcourseForm= new FormGroup({
    courseName: new FormControl('',[Validators.required]),
    courseDuration: new FormControl('',[Validators.required]),
    courseTiming:new FormControl('',[Validators.required]),
    enrolledStudents:new FormControl('',[Validators.required]),
    courseDescription:new FormControl('',[Validators.required]),
})

get courseName()
  {
    return this.addcourseForm.get('courseName')
  }
  get courseDuration()
  {
    return this.addcourseForm.get('courseDuration')
  }
  get courseTiming()
  {
    return this.addcourseForm.get('courseTiming')
  }
  get enrolledStudents()
  {
    return this.addcourseForm.get('enrolledStudents')
  }
  get courseDescription()
  {
    return this.addcourseForm.get('courseDescription')
  }

  onSubmit()
  {
    this.submitted=true;
    this.course = this.addcourseForm.value;
    //this.course.instituteId = this.instituteId;
    console.log(this.course);
    this.addCourse();
  }

  addCourse()
  {
    this.course.instituteId = this.instituteId;
      this.adminservice.addCourse(this.course).subscribe({
        next:()=>console.log('updating'),
        error:()=>console.log('Error while adding'),
        complete:()=>{
          this.toastr.warning("Course for the Institute added Sucessfully");
          this.router.navigate(['/admin/course',this.instituteId]);
        }
      })
    }
   }
  


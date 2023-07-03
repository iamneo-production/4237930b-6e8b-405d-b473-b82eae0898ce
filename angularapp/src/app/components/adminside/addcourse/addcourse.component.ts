import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  CourseName: string='' ;
  CourseDuration:string='';
  CourseTimings:string='';
  StudentsEnrolled:any;
  CourseDescription:string='';

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      CourseName: ['', Validators.required],
      CourseDuration: ['', Validators.required],
      CourseTimings:['', Validators.required],
      StudentsEnrolled:['', Validators.required],
      CourseDescription:['', Validators.required],
  },);
  }
  ngAfterViewInit() {
    /*this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#808080';*/
}
get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESSfully!! Added Course');
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}

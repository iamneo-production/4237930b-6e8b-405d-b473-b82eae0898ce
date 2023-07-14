import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/class/Course';
import { Admission } from 'src/app/class/admission';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {

  constructor(private router:Router,private userservice:UserserviceService,private route:ActivatedRoute,private toastr :ToastrService,private modalService: NgbModal, private authservice:AuthService) {}
  searchText!:string;
  instituteId !:number;
  userId : number;
  courses ?: Course[];
  oldAdmission ?: Admission[];

      ngOnInit(): void {
  
        this.instituteId = this.route.snapshot.params['instituteId'];
        console.log(this.instituteId);
        this.getCourses();
        this.userId = this.authservice.getUserId();
        this.checkAdmissionByuserId();
      }
      
      getCourses(){
        this.userservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>
          {
            console.log(data);
            this.courses= data;
      
          })
        }

        //Retrive the old admission and navigate to admission form page
        checkAdmissionByuserId()
        {
            this.userservice.getByUserId(this.userId).subscribe(data =>{
            this.oldAdmission = data;
          })
        }

        //check old admission and redirect to AdmissionForm page
        goToStudentPage(courseId : number)
        {
          if(this.oldAdmission.length == 0) {
            this.router.navigate(['/user/admissionform',this.instituteId,courseId]);
          }
          else {
            let data = this.oldAdmission.find(admission => admission.courseId === courseId );
            console.log(data);
            if(data != null) {
              this.toastr.warning('Check other courses!', 'Already Enrolled this Course!');
            }
            else {
              this.router.navigate(['/user/admissionform',this.instituteId,courseId]);
            }
          }
        }    
}

  

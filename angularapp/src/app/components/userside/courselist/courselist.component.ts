import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/class/Course';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {

  constructor(private router:Router,private userservice:UserserviceService,private route:ActivatedRoute,private toastr :ToastrService,private modalService: NgbModal) {}
  searchText!:string;
  instituteId !:number;
  
      courses ?: Course[];
      ngOnInit(): void {
  
        this.instituteId = this.route.snapshot.params['instituteId'];
        console.log(this.instituteId);
    
        this.getCourses();
        
    }
      
      getCourses(){
        this.userservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>
          {
            console.log(data);
            this.courses= data;
      
          })
        }
        goToStudentPage(courseId:number)
        {
          this.router.navigate(['/user/admissionform',this.instituteId,courseId]);
       
        }    
        
      
  
  }

  

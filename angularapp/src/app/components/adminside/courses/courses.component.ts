import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/class/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService,private modalService: NgbModal) {}
  instituteId !:number;
  searchText!:string;
  course : Course[];
  
  ngOnInit(): void {
    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.getCourseByInstitute();
    }

  getCourseByInstitute()
  {
    this.adminservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>
      {
        console.log(data);
        this.course= data;
      });
  }
  
    goteditcourse(courseId:number) {
      this.router.navigate(['/admin/editcourse',courseId]);
    }

    //for delete popup modal
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    }

    delete(courseId :number)
    {
        this.modalService.dismissAll();
        this.adminservice.deleteCourse(courseId).subscribe(data =>
          {
            this.getCourseByInstitute();
        });

    }

    gotoaddcourse()
    {
      this.router.navigate(['/admin/addcourse',this.instituteId]);
    }




}

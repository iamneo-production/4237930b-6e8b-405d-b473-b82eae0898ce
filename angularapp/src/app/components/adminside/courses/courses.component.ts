import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/Courses';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router,private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  searchText!:string;
  
  Courses:Courses[]=[
    new Courses(" M.E(VSI)",2," 9am to 4pm","yyy",222),
    new Courses(" M.SC(CS)",2," 9am to 4pm","yyy",122),
    new Courses(" M.E(ECE)",2," 9am to 4pm","yyy",50)
  ];


    

    goteditcourse()
    {
      this.router.navigate(['/admin/editcourse/1']);
    }

    //for delete popup modal
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    }

    delete()
    {
      this.modalService.dismissAll();
    }



}

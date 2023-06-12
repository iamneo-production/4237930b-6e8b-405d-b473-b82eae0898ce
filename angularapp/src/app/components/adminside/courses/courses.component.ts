import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/Courses';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  searchText!:string;
  
  Courses:Courses[]=[
    new Courses(" M.E(VSI)",2," 9am to 4pm","yyy",222),
    new Courses(" M.SC(CS)",2," 9am to 4pm","yyy",122),
    new Courses(" M.E(ECE)",2," 9am to 4pm","yyy",50)
  ];


    alert()
    {
      alert("Institute deleted successfully");
    }

    goteditcourse()
    {
      this.router.navigate(['/admin/editcourse']);
    }




}

import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/Courses';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  searchText!:string;

      courses ?: Courses[]=[
        new Courses("M.E(VSI)",10,"20days","YYYY",50),
        new Courses("M.E",10,"30days","ZZZZ",60),
        new Courses("PHD",15,"40days","XXXX",40),
        new Courses("MCA",9,"10days","XYZA",25),
        new Courses("MBA",11,"15days","AAAA",50),
        new Courses("MBA",11,"15days","AAAA",50),
      ]
  
  }

  

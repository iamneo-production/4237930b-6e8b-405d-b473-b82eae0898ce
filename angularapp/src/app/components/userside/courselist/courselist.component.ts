import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  users: any[] = [];
  items: any[] = [];
  constructor(){
    this.users = [
      { Coursename : 'VLSI', Courseduration : '10hr', CourseAvailabletimings : '20days', NumberofStudents : '50', CourseDescription : 'YYY' },
      
    ];
    this.items = [
      { Coursename : 'CA', Courseduration : '10hr', CourseAvailabletimings : '20days', NumberofStudents : '50', CourseDescription : 'YYY' },
    ];
  }
  

}

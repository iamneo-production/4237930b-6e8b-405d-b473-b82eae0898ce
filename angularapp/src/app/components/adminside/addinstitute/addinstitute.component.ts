import { Component, OnInit } from '@angular/core';
import { Institutes } from 'src/app/class/institutes';

@Component({
  selector: 'app-addinstitute',
  templateUrl: './addinstitute.component.html',
  styleUrls: ['./addinstitute.component.css']
})
export class AddinstituteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newinstitute : Institutes = new Institutes();
  onSubmit(){
    alert("Institute added Sucessfully");
    console.log(this.newinstitute);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editinstitute',
  templateUrl: './editinstitute.component.html',
  styleUrls: ['./editinstitute.component.css']
})
export class EditinstituteComponent implements OnInit {

  formdata = {academyname:"",contactnumber:"", image:"", email:"", location:"", discription:""};
  onSubmit(){
    console.log(this.formdata)
}
  constructor() { }

  ngOnInit(): void {
  }

}

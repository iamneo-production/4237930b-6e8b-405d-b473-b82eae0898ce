import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/Courses';


type Institue = Array<{ id: number; name: string; src:string; Place:string; rating:number}>;
type Info = Array<{id:number;firstname: string; lastname:string; gender:string; mobileNumber:string, fathername:string, mothername:string, emailId:string, age:number, marks:number}>;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  searchText!:string;

  courses ?: Courses[]=[
    new Courses("M.E(VSI)",10,"20days","YYYY",50)
  ]

  institutes : Institue = [
 { id: 2, name: "BIT", src: "https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg",Place :"Sathyamangalam",rating:4},
 ];
 studentInfo : Info =
 [
  {id: 1, firstname:"ABC", lastname: "EFG", gender:"F", mobileNumber:"1245679561", fathername:"XXX", mothername:"YYY", emailId:"abc@gmail.com", age:18, marks:581 },
 ];
 

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {}

  baseUrl: string = "https://8080-cacdfbaedcbbdbddaedecdbcffbbedebaebcdacaee.project.examly.io/"

//get the list of institutes

public viewInstitute(): Observable<Institute[]>{
  return this.http.get<Institute[]>(this.baseUrl+`user/viewInstitutes`);
}


//get the list of courses in institutes
public viewCoursesFromInstitute(instituteId : number): Observable<Course[]>{
  return this.http.get<Course[]>(this.baseUrl+`user/findByInstituteId/`+instituteId);
}
  
   

    
}

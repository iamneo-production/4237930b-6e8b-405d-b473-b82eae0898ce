import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';

import { Admission } from 'src/app/class/admission';
import { Students } from 'src/app/class/Student';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(private http: HttpClient) {}

  baseUrl: string = "https://8080-bafffefcdbcffbbedebaebcdacaee.project.examly.io/"

//get the list of institutes

public viewInstitute(): Observable<Institute[]>{
  return this.http.get<Institute[]>(this.baseUrl+`user/viewInstitutes`);
}


//get the list of courses in institutes
public viewCoursesFromInstitute(instituteId : number): Observable<Course[]>{
  return this.http.get<Course[]>(this.baseUrl+`user/findByInstituteId/`+instituteId);
}

 
  //get admission by userId
  public getByUserId(userId : number): Observable<Admission[]>{
    return this.http.get<Admission[]>(this.baseUrl+`user/getByUserId/`+userId);
  }


  //get the course by courseId
  public getCourseById(courseId : number): Observable<Course>{
    return this.http.get<Course>(this.baseUrl+`user/getCourseById/`+courseId);
  }

   //get the student by studentId
   public getStudentById(studentId : number): Observable<Students>{
    return this.http.get<Students>(this.baseUrl+`user/getStudentById/`+studentId);
  }

  //get the institute by instituteId
  public getInstituteById(instituteId : number): Observable<Institute>{
    return this.http.get<Institute>(this.baseUrl+`user/getInstituteById/`+instituteId);
  }

  //get the institute by instituteId
  public getAdmissionById(admissionId : number): Observable<Admission>{
    return this.http.get<Admission>(this.baseUrl+`user/viewAdmission/`+admissionId);
  }

}

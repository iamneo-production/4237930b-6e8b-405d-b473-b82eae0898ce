import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';
import { Students } from 'src/app/class/Student';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  //change the baseUrl asper your workspace port-8080 link
  baseUrl: string = "https://8080-ffaeadfaacdbcffbbedebaebcdacaee.project.examly.io/"

  //get the list of institutes
  public viewInstitute(): Observable<Institute[]>{
    return this.http.get<Institute[]>(this.baseUrl+`admin/viewInstitutes`);
  }

  //add the institutes
  public addInstitute(newinstitute:Institute): Observable<any>{
    return this.http.post<Institute>(this.baseUrl+`admin/addInstitute`,newinstitute);
  }

  //get the institute by instituteId
  public getInstituteById(instituteId : number): Observable<Institute>{
    return this.http.get<Institute>(this.baseUrl+`admin/getInstituteById/`+instituteId);
  }

  //update the institute by instituteId and institute details
  public editInstitute(instituteId:number, institute:Institute): Observable<Institute>{
    return this.http.put<Institute>(this.baseUrl+`admin/editInstitute/`+instituteId,institute);
  }
   //get the list of courses in institutes
   public viewCoursesFromInstitute(instituteId : number): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+`admin/findByInstituteId/`+instituteId);
  }

   //add the courses to the specified institute
  public addCourse(newcourse:Course): Observable<any>{
    return this.http.post<Institute>(this.baseUrl+`admin/addCourse`,newcourse);
  }

  //delete the course by courseId
  public deleteCourse(courseId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(this.baseUrl+`admin/deleteCourse/`+courseId,requestOptions);
  }
  
  //update the Course by CourseId and Course details
  public editCourse(courseId:number, updatedCourse:Course): Observable<Course>{
    return this.http.put<Course>(this.baseUrl+`admin/editCourse/`+courseId,updatedCourse);
  }
  //get the course by courseId
  public getCourseById(courseId : number): Observable<Course>{
    return this.http.get<Course>(this.baseUrl+`admin/getcourseById/`+courseId);
  }
  //get the list of institutes
  public viewStudents(): Observable<Students[]>{
    return this.http.get<Students[]>(this.baseUrl+`admin/viewStudent`);
  }
  

}

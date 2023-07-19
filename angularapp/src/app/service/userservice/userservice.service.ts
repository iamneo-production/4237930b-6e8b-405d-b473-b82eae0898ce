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

  baseUrl: string = "https://8080-ecefccaeffbaddbcffbbedebaebcdacaee.project.examly.io/";

  constructor(private http: HttpClient) {}

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
  //add student details for admin
  public addStudent(newstudent: Students): Observable<Students>{
    return this.http.post<Students>(this.baseUrl+'user/addStudent',newstudent);
  }

  //update student by studentId and student details
  public editStudent(studentId : number, student:Students): Observable<Students>{
    return this.http.put<Students>(this.baseUrl+'user/editStudent/'+studentId,student);
  }

  //add the admission
  public addAdmission(newadmission:Admission): Observable<Admission>{
    return this.http.post<Admission>(this.baseUrl+`user/addAdmission`,newadmission);
  }

  //delete the admission by admissionId
  public deleteAdmission(admissionId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<string>(this.baseUrl+`user/deleteAdmission/`+admissionId,requestOptions);
  }

  //update admission by admission id and admission details
  public editAdmission(admissionId : number, admission:Admission): Observable<Admission>{
    return this.http.put<Admission>(this.baseUrl+'user/editAdmission/'+admissionId,admission);
  }

  //get the student by userId
  public getStudentByUserId(userId : number): Observable<Students>{
    return this.http.get<Students>(this.baseUrl+`user/getStudentByuserId/`+userId);
  }

  //incrementing student count on enrolling course
  public incrementStudents(courseId : number): Observable<any>{
    return this.http.get<any>(this.baseUrl+`user/incrementstudents/`+courseId);
  }

  //incrementing student count on enrolling course
  public decrementStudents(courseId : number): Observable<any>{
    return this.http.get<any>(this.baseUrl+`user/decrementstudents/`+courseId);
  }


}

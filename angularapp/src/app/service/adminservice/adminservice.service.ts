import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institute } from 'src/app/class/institute';
import { Course } from 'src/app/class/Course';
import { Students } from 'src/app/class/Student';
import { Admission } from 'src/app/class/admission';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  //change the baseUrl asper your workspace port-8080 link
  baseUrl: string = "https://8080-ffaeadfaacdbcffbbedebaebcdacaee.project.examly.io/"

  //get the list of institutes
  public viewInstitute(): Observable<Institute[]>{
    return this.http.get<Institute[]>(this.baseUrl+`admin/institute`);
  }

  //add the institutes
  public addInstitute(newinstitute:Institute): Observable<any>{
    return this.http.post<Institute>(this.baseUrl+`admin/addInstitute`,newinstitute);
  }

  //get the institute by instituteId
  public getInstituteById(instituteId : number): Observable<Institute>{
    return this.http.get<Institute>(this.baseUrl+`admin/institute/`+instituteId);
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
    return this.http.get<Course>(this.baseUrl+`admin/courses/`+courseId);
  }
  //get the list of institutes
  public viewStudents(): Observable<Students[]>{
    return this.http.get<Students[]>(this.baseUrl+`admin/student`);
  }

   //add student details for admin
   public addStudent(newstudent: Students): Observable<Students>{
    return this.http.post<Students>(this.baseUrl+'admin/addStudent',newstudent);
  }

  //delete student details for admin by studentId
  public deleteStudent(studentId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(this.baseUrl+'admin/deleteStudent/'+studentId,requestOptions);
  }

  //update student by studentId and student details
  public editStudent(studentId : number, student:Students): Observable<Students>{
    return this.http.put<Students>(this.baseUrl+'admin/editStudent/'+studentId,student);
  }

  //get the student by studentId
  public getStudentById(studentId : number): Observable<Students>{
    return this.http.get<Students>(this.baseUrl+'admin/student/'+studentId);
  }

  //add the admission
  public addAdmission(newadmission:Admission): Observable<Admission>{
    return this.http.post<Admission>(this.baseUrl+`admin/addAdmission`,newadmission);
  }

  //update admission by admission id and admission details
  public editAdmission(admissionId : number, admission:Admission): Observable<Admission>{
    return this.http.put<Admission>(this.baseUrl+'admin/editAdmission/'+admissionId,admission);
  }

  //get the admission by admissionId
  public getAdmissionById(admissionId : number): Observable<Admission>{
    return this.http.get<Admission>(this.baseUrl+'admin/admission/'+admissionId);
  }

  //get the admission by studentid
  public getAdmissionByStudentId(studentId : number): Observable<Admission>{
    return this.http.get<Admission>(this.baseUrl+'admin/getAdmissionById/'+studentId);
  }
  //delete the institute by instituteId
  public deleteInstitute(instituteId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<string>(this.baseUrl+`admin/deleteInstitutes/`+instituteId,requestOptions);
  }
  

}

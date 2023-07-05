import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admission } from 'src/app/class/admission';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://8080-bafffefcdbcffbbedebaebcdacaee.project.examly.io/";
  //get the course by courseId
  public getByUserId(userId : number): Observable<Admission[]>{
    return this.http.get<Admission[]>(this.baseUrl+`user/getByUserId/`+userId);
  }
}

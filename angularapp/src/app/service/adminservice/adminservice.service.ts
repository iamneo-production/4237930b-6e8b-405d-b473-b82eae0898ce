import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institute } from 'src/app/class/institute';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  //change the baseUrl asper your workspace port-8080 link
  baseUrl: string = "https://8080-fddecffdbcffbbedebaebcdacaee.project.examly.io/"

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

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/class/user';
import { Login } from 'src/app/class/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginstatus:boolean = false;
  userId: number;


  private baseURL = "https://8080-deabdbcffbbedebaebcdacaee.project.examly.io/";

  constructor(private http: HttpClient) { }

  getUserId(): number {
    return this.userId;
  }
  
  setUserId(userId: number): void {
    this.userId = userId;
  }

  //register admin
  public saveAdmin(data :User):Observable<string>
  {
  const requestOptions: Object = {
    responseType: 'text'
  }
  return this.http.post<string>(this.baseURL+`admin/signup`,data,requestOptions);
}
//register user
public saveUser(data :User):Observable<string>
{
  const requestOptions: Object = {
   responseType: 'text'
  }
  return this.http.post<string>(this.baseURL+`user/signup`,data,requestOptions);
}
//check availability
  public checkUserAvailabilityByEmail(email:string):Observable<boolean> {
    return this.http.get<boolean>(this.baseURL+`register/check/`+email);
  }
//check role
public checkUserRole(email:string):Observable<string> {

  const requestOptions: Object = {
   responseType: 'text'
  }
    return this.http.get<string>(this.baseURL+`login/checkUserRole/`+email,requestOptions);
 }
//check user details
  public isUserPresent(data :Login):Observable<boolean>
 {
    return this.http.post<boolean>(this.baseURL+`user/login`,data);
 }
 //check admin details
 public isAdminPresent(data :Login):Observable<boolean>
 {
    return this.http.post<boolean>(this.baseURL+`admin/login`,data);
 }

 //check id by mail
public getIdByEmail(email:string):Observable<number> {
  return this.http.get<number>(this.baseURL+`user/getId/`+email);
}
}

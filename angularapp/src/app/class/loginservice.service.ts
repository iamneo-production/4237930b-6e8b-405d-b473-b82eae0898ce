import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../class/login';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService 
{

  constructor(private http: HttpClient) { }

  //check userRole by email
  public checkUserRole(email:string):Observable<string> 
  {

    const requestOptions: Object = 
    {
      responseType: 'text'
    }
    return this.http.get<string>(`http://localhost:8080/login/checkUserRole/`+email,requestOptions);

 }

//check Admin data's by Login crenditials
 public checkAdmin(data :Login):Observable<boolean>
 {
    return this.http.post<boolean>(`http://localhost:8080/admin/login/`,data);
 }

 //check User data's by Login crenditials
 public checkUser(data :Login):Observable<boolean>
 {
    return this.http.post<boolean>(`http://localhost:8080/user/login/`,data);
 }


 //check the account exist or not by email
 public checkUserAvailabilityByEmail(email:string):Observable<boolean> 
 {
    return this.http.get<boolean>(`http://localhost:8080/register/check/`+email);
}


  //Store Admin data's to Database
  public RegisterAdmin(data :User):Observable<string>
  {
    const requestOptions: Object = 
    {
      responseType: 'text'
    }
    return this.http.post<string>(`http://localhost:8080/admin/signup/`,data,requestOptions);
  }

   //Store User data's to Database
   public RegisterUser(data :User):Observable<string>
   {
     const requestOptions: Object = 
     {
       responseType: 'text'
     }
     return this.http.post<string>(`http://localhost:8080/user/signup/`,data,requestOptions);
   }

}
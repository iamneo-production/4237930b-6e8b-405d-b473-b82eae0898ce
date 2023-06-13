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
  public checkUserRole(email:String):Observable<String> 
  {

    const requestOptions: Object = 
    {
      responseType: 'text'
    }
    return this.http.get<String>(`http://localhost:8080/login/checkUserRole/`+email,requestOptions);

 }

//check Admin data's by Login crenditials
 public checkAdmin(data :Login):Observable<Boolean>
 {
    return this.http.post<Boolean>(`http://localhost:8080/admin/login/`,data);
 }

 //check User data's by Login crenditials
 public checkUser(data :Login):Observable<Boolean>
 {
    return this.http.post<Boolean>(`http://localhost:8080/user/login/`,data);
 }


 //check the account exist or not by email
 public checkUserAvailabilityByEmail(email:String):Observable<Boolean> 
 {
    return this.http.get<Boolean>(`http://localhost:8080/register/check/`+email);
}


  //Store Admin data's to Database
  public RegisterAdmin(data :User):Observable<String>
  {
    const requestOptions: Object = 
    {
      responseType: 'text'
    }
    return this.http.post<String>(`http://localhost:8080/admin/signup/`,data,requestOptions);
  }

   //Store User data's to Database
   public RegisterUser(data :User):Observable<String>
   {
     const requestOptions: Object = 
     {
       responseType: 'text'
     }
     return this.http.post<String>(`http://localhost:8080/user/signup/`,data,requestOptions);
   }

}
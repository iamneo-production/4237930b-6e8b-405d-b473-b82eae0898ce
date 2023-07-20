import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  userRole!: string;
  userId !:number;

  constructor(private router: Router, private toastr: ToastrService, private authservice : AuthService) {}

  onSubmit(): void {
    console.log(this.login);
    this.authservice.checkUserRole(this.login.email).subscribe((data) =>
    {
      this.userRole = data;
      console.log(this.userRole);

      if(this.userRole == "Admin"){
        this.validateadmin();
      }

      else if(this.userRole == "User"){
        this.validateuser();
      }

      else{
        this.toastr.error('Account not exist!', 'Login Status !');
      }
    });
  

  }

  validateadmin()
  {
    console.log(this.login);
    this.authservice.isAdminPresent(this.login).subscribe((data) =>
    {
    if(data==true){
    {
      console.log(data);
      this.gotoAdmin();
      this.authservice.loginstatus = true;
      this.saveUserId();
    }
  
  }
  else
  {
    this.toastr.error('Incorrect User Password !', 'Login Status !');
  }
});
  }
  validateuser()
  {
    console.log(this.login);
    this.authservice.isUserPresent(this.login).subscribe((data) =>
    {
      if(data == true){
        console.log(data);
        this.gotoUser();
        this.authservice.loginstatus = true;
        this.saveUserId();
      }
      else
      {
        this.toastr.error('Incorrect User Password !', 'Login Status !');
      }
    });
  }
  
  saveUserId(): void {
    this.authservice.getIdByEmail(this.login.email).subscribe((data) =>
    {
      this.authservice.setUserId(data);
      console.log(this.authservice.getUserId());
    });
  }

  gotoAdmin(): void {
    this.toastr.success('Admin Login successful !', 'Login Status !');
    this.router.navigate(['/admin']);
  }

  gotoUser(): void {
    this.toastr.success('User Login successful !', 'Login Status !');
    this.router.navigate(['/user']);
  }

}

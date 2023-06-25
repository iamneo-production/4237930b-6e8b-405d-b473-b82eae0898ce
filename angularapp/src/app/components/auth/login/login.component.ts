import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login();
  userRole !: string;

  constructor(private router:Router,private toastr :ToastrService)
  {}

  onSubmit()
  {
    console.log(this.login);

    if(this.login.email == "admin" && this.login.password == "admin" )
    {
      this.toastr.success('Admin Login successful !', 'Login Status !');
      this.gotoAdmin();
    }
    else if(this.login.email == "user" && this.login.password == "user" )
    {
      this.toastr.success('User Login successful !', 'Login Status !');
      this.gotoUser();
    }
    else
    {
      this.toastr.error('Account not exist!', 'Login Status !');
    }
  }

  gotoAdmin()
  {
    this.router.navigate(['/admin']);
  }

  gotoUser()
  {
    this.router.navigate(['/user']);
  }

}

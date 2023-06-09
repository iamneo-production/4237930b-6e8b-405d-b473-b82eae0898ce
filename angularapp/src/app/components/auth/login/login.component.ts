import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login();
  userRole !: string;

  constructor(private router:Router)
  {}

  onSubmit()
  {
    console.log(this.login);

    if(this.login.email == "admin" && this.login.password == "admin" )
    {
      this.gotoAdmin();
    }
    else if(this.login.email == "user" && this.login.password == "user" )
    {
      this.gotoUser();
    }
    else
    {
      alert("error credentials");
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

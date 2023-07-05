import { Component, Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/service/authservice/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AuthComponent implements CanActivate {

  status: boolean = false;
  constructor(private authservice: AuthService, private route :Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):

  boolean {
    if(this.isloggedIn()){
      return true;
    }
    this.route.navigate(['auth/']);
    return false;
  }

  public isloggedIn(){
    let status = false;
    if(this.authservice.loginstatus===true){
      status=true;
    }
    else{
      status=false;
    }
    return status;
  }

}

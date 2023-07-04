import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { MustMatch } from './_helpers/must-match.validator';
import { AuthService } from 'src/app/service/authservice/auth.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  userAdmin: string='';
  email: string='';
  userName: string='';
  mobileNumber: any;
  password: string='';
  cpassword: string='';  

  registerForm!: FormGroup;
  newuser : User = new User();


  // submitted = false;

  constructor(private formBuilder: FormBuilder, private authservice : AuthService, private router: Router) {}

  ngOnInit(): void 
  {
    this.registerForm = this.formBuilder.group
    (
      {
      userAdmin: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword:['', Validators.required],
      },
    {
      validator: MustMatch('password', 'cpassword')
    });
  }

  get f() { 
    return this.registerForm.controls;
  }
    onSubmit() {
        this.newuser.email = this.email;
        this.newuser.mobileNumber = this.mobileNumber;
        this.newuser.password = this.password;
        this.newuser.userRole = this.userAdmin;
        this.newuser.username = this.userName;
        console.log(this.newuser);
        this.checkmailid();
        
    }
    checkmailid()
      {
        this.authservice.checkUserAvailabilityByEmail(this.newuser.email).subscribe((data) =>{
          console.log(data);
          if(data == true) {
            alert("Account already exist..! Go to Login page");
  
            this.registerForm.reset();
          }
          else
            this.createaccount();
        });
      }

      createaccount()
      {
        if(this.newuser.userRole == "Admin") {
          this.authservice.saveAdmin(this.newuser).subscribe((data) =>
          {
            console.log(data);});
            alert("Admin Account created sucessfully");
            this.router.navigate(['auth/login'])

            this.registerForm.reset();
        }

        else if(this.newuser.userRole == "User")
          {
            this.authservice.saveUser(this.newuser).subscribe((data) =>
            {
              console.log(data);});
              alert("User Account created sucessfully");
              this.router.navigate(['auth/login'])

              this.registerForm.reset();
            }
          }
        }

    

      /*onSubmit() 
      {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
        this.newuser.email = this.email;
        this.newuser.mobileNumber = this.mobileNumber;
        this.newuser.password = this.password;
        this.newuser.userRole = this.userAdmin;
        this.newuser.username = this.userName;
        console.log(this.newuser);

      }*/

      // onReset() {
      //   this.submitted = false;
      //   this.registerForm.reset();
      // }


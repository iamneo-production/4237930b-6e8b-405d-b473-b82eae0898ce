import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 
import { MustMatch } from './_helpers/must-match.validator';
import { User } from 'src/app/class/user';
import { LoginserviceService } from 'src/app/class/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{


  userAdmin:string='';
  email:string='';
  userName:string='';
  mobileNumber:any;
  password:string='';
  cpassword:string='';  

  registerForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) 
  {
  
  }

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

}
);
  }

  get f() 
  { 
    
    return this.registerForm.controls;

  }

    onSubmit() 
    {

        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) 
        {

            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
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

      onReset() 
      {

        this.submitted = false;
        this.registerForm.reset();

    }
  
}

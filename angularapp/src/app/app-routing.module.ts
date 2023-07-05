import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { UsersideComponent } from './components/userside/userside.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { EnrolledcourseComponent } from './components/userside/enrolledcourse/enrolledcourse.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { StatusComponent } from './components/userside/status/status.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin",component:AdminsideComponent,children:
   [
      {path:"",component:InstitutesComponent},
      {path:"institute",component:InstitutesComponent},
      {path:"course/:instituteId",component:CoursesComponent},
      {path:"addcourse/:instituteId",component:AddcourseComponent},
      {path:"editcourse/:courseId",component:EditcourseComponent},
      {path:"students",component:UserComponent},
      {path:"addstudent",component:AdduserComponent},
      {path:"editstudent/:studentId",component:EdituserComponent},
      {path:"addinstitute",component:AddinstituteComponent},
      {path:"editinstitute/:instituteId",component:EditinstituteComponent},
      {path:"edituser",component:EdituserComponent}
   ],
  //  canActivate: [AuthComponent]
  },

  {path:"user",component:UsersideComponent,children:
    [
      {path:"",component:UserhomepageComponent},
      {path:"institute",component:UserhomepageComponent},
      {path:"enrolledcourse",component:EnrolledcourseComponent},
      {path:"courses",component:CourselistComponent},
      {path:"admissionform",component:AdmissionformComponent},
      {path:"status/:admissionId",component:StatusComponent}
    ],
    // canActivate: [AuthComponent]
  },
  
  {path:"auth",component:AuthComponent,children:
   [
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
   ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

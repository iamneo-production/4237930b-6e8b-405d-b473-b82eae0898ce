import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AdminnavbarComponent } from './components/adminside/adminnavbar/adminnavbar.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UsersideComponent } from './components/userside/userside.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { EnrolledcourseComponent } from './components/userside/enrolledcourse/enrolledcourse.component';
import { StatusComponent } from './components/userside/status/status.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { UsernavbarComponent } from './components/userside/usernavbar/usernavbar.component';
import { UserreviewComponent } from './components/userside/userreview/userreview.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsideComponent,
    AddcourseComponent,
    AddinstituteComponent,
    AdduserComponent,
    AdminnavbarComponent,
    AdminreviewComponent,
    CoursesComponent,
    EditcourseComponent,
    EditinstituteComponent,
    EdituserComponent,
    InstitutesComponent,
    UserComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    UsersideComponent,
    AdmissionformComponent,
    CourselistComponent,
    EnrolledcourseComponent,
    StatusComponent,
    UserhomepageComponent,
    UsernavbarComponent,
    UserreviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
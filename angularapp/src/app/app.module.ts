import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { UsersideComponent } from './components/userside/userside.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { StatusComponent } from './components/userside/status/status.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { UserreviewComponent } from './components/userside/userreview/userreview.component';
import { UsernavbarComponent } from './components/userside/usernavbar/usernavbar.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { EditinsituteComponent } from './components/adminside/editinsitute/editinsitute.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';
import { AdminnavbarComponent } from './components/adminside/adminnavbar/adminnavbar.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminsideComponent,
    UsersideComponent,
    CoursesComponent,
    InstitutesComponent,
    UserComponent,
    AdminreviewComponent,
    AdmissionformComponent,
    StatusComponent,
    UserhomepageComponent,
    UserreviewComponent,
    UsernavbarComponent,
    AddcourseComponent,
    EditcourseComponent,
    EditinsituteComponent,
    AdduserComponent,
    EdituserComponent,
    AdminnavbarComponent,
    AddinstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

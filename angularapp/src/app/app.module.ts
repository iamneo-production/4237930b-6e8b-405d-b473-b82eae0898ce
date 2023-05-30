import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { UsersideComponent } from './components/userside/userside.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { UsernavbarComponent } from './components/userside/usernavbar/usernavbar.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { EditinsituteComponent } from './components/adminside/editinsitute/editinsitute.component';
import { AdminnavbarComponent } from './components/adminside/adminnavbar/adminnavbar.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { AdminacademyComponent } from './components/adminside/adminacademy/adminacademy.component';
import { AdmincourseComponent } from './components/adminside/admincourse/admincourse.component';
import { AdminstudentComponent } from './components/adminside/adminstudent/adminstudent.component';
import { AddstudentComponent } from './components/adminside/addstudent/addstudent.component';
import { EditstudentComponent } from './components/adminside/editstudent/editstudent.component';
import { ViewacademyComponent } from './components/userside/viewacademy/viewacademy.component';
import { EnrolledcourseComponent } from './components/userside/enrolledcourse/enrolledcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminsideComponent,
    UsersideComponent,
    AdmissionformComponent,
    UsernavbarComponent,
    AddcourseComponent,
    EditcourseComponent,
    EditinsituteComponent,
    AdminnavbarComponent,
    AddinstituteComponent,
    AdminacademyComponent,
    AdmincourseComponent,
    AdminstudentComponent,
    AddstudentComponent,
    EditstudentComponent,
    ViewacademyComponent,
    EnrolledcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

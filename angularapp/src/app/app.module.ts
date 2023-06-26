import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { UsersideComponent } from './components/userside/userside.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { AdminnavbarComponent } from './components/adminside/adminnavbar/adminnavbar.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { EnrolledcourseComponent } from './components/userside/enrolledcourse/enrolledcourse.component';
import { StatusComponent } from './components/userside/status/status.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { UsernavbarComponent } from './components/userside/usernavbar/usernavbar.component';
import { UserreviewComponent } from './components/userside/userreview/userreview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminsideComponent,
    UsersideComponent,
    LoginComponent,
    SignupComponent,
    AddcourseComponent,
    AddinstituteComponent,
    AdduserComponent,
    AdminreviewComponent,
    AdminnavbarComponent,
    CoursesComponent,
    EditcourseComponent,
    EditinstituteComponent,
    EdituserComponent,
    InstitutesComponent,
    UserComponent,
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
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { StatusComponent } from './components/userside/status/status.component';
import { UserreviewComponent } from './components/userside/userreview/userreview.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutesComponent,
    CoursesComponent,
    UserComponent,
    AdduserComponent,
    EdituserComponent,
    AdminreviewComponent,
    UserhomepageComponent,
    CourselistComponent,
    StatusComponent,
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

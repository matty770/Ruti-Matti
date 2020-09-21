import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryMenuComponent } from './secretary-menu/secretary-menu.component';
import { SecretaryTeacherComponent } from './secretary-teacher/secretary-teacher.component';
import { SecretaryStudentComponent } from './secretary-student/secretary-student.component';
import { SecretaryClassComponent } from './secretary-class/secretary-class.component';
import { HomeComponent } from 'src/app/home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { MyComComponent } from './my-com/my-com.component';
import { NewSecretaryTeacherComponent } from './new-secretary-teacher/new-secretary-teacher.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';

import { PhoneMaskDirective } from './directivs/phone-mask.directive';

import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { NewStudentComponent } from './new-student/new-student.component';
import { DirBorderDirective } from './directivs/dir-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { ChildrenOfParentComponent } from './children-of-parent/children-of-parent.component';
import { ChildReportComponent } from './child-report/child-report.component';
import { ChildUpdateInpoComponent } from './child-update-inpo/child-update-inpo.component';

export const Rout:Routes =[{path:'',component:HomeComponent},
{path:'seretaryMenu',component:SecretaryMenuComponent},
{path:'seretaryTeacher',component:SecretaryTeacherComponent},
{path:'seretaryStudent',component:SecretaryStudentComponent},
{ path: 'seretaryStudent/:studentName', component: SecretaryStudentComponent },
{path:'seretaryClass',component:SecretaryClassComponent},
{path:'myCom',component:MyComComponent},
{path:'ChildrenForParent',component:ChildrenOfParentComponent},
{path:'ChildReport',component:ChildReportComponent},
{path:'ChildUpdateInpo',component:ChildUpdateInpoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecretaryMenuComponent,
    SecretaryTeacherComponent,
    SecretaryStudentComponent,
    SecretaryClassComponent,
    MyComComponent,
    NewSecretaryTeacherComponent,
    //nPhonePipePipe,
    PhoneMaskDirective,
    NewStudentComponent,
    DirBorderDirective,
    //FilterPipe,
    LoginComponent,
    ChildrenOfParentComponent,
    ChildReportComponent,
    ChildUpdateInpoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(Rout)

  ],
  providers: [TeacherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

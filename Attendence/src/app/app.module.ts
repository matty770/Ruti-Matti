import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryMenuComponent } from './secretary-menu/secretary-menu.component';
import { HomeComponent } from 'src/app/home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { MyComComponent } from './my-com/my-com.component';
//import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { PhoneMaskDirective } from './directivs/phone-mask.directive';
import { DirBorderDirective } from './directivs/dir-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { ChildrenOfParentComponent } from './children-of-parent/children-of-parent.component';
import { ChildReportComponent } from './child-report/child-report.component';
import { ChildUpdateInfoComponent } from './child-update-info/child-update-info.component';
import { TeacherHomePageComponent } from './teacher-home-page/teacher-home-page.component';
import { ChildrenOfTeacherComponent } from './children-of-teacher/children-of-teacher.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ManagerHomePageComponent } from './manager-home-page/manager-home-page.component';
import { ListOfChildrenComponent } from './list-of-children/list-of-children.component';
import { ListOfKinderGardenComponent } from './list-of-kinder-garden/list-of-kinder-garden.component';
import { ListOfTeachersComponent } from './list-of-teachers/list-of-teachers.component';
import { ListOfParentsComponent } from './list-of-parents/list-of-parents.component';
import { FormKinderGardenComponent } from './form-kinder-garden/form-kinder-garden.component';
import { FormChildrenComponent } from './form-children/form-children.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormFutureDataComponent } from './form-future-data/form-future-data.component';
import { KinderGardenUpdateInfoComponent } from './kinder-garden-update-info/kinder-garden-update-info.component';
import { UserUpdateInfoComponent } from './user-update-info/user-update-info.component';
import { FutureDataUpdateInfoComponent } from './future-data-update-info/future-data-update-info.component';
import { ChildrenForKinderGardenComponent } from './children-for-kinder-garden/children-for-kinder-garden.component';
//import { ChildrenOfTecherComponent } from './children-of-techer/children-of-techer.component';

export const Rout:Routes =[{path:'',component:LoginComponent},
{path:'seretaryMenu',component:SecretaryMenuComponent},
{path:'myCom',component:MyComComponent},
{path:'ChildrenForParent',component:ChildrenOfParentComponent},
{path:'ChildReport',component:ChildReportComponent},
{path:'ChildUpdateInfo',component:ChildUpdateInfoComponent},
{path:'TeacherHomePage',component:TeacherHomePageComponent},
{path:'ChildrenOfTeacher',component:ChildrenOfTeacherComponent},
{path:'Attendance',component:AttendanceComponent},
{path:'ManagerHomePage',component:ManagerHomePageComponent},
{path:'ListOfKinderGarden',component:ListOfKinderGardenComponent},
{path:'ListOfChildren',component:ListOfChildrenComponent},
{path:'ListOfParent',component:ListOfParentsComponent},
{path:'ListOfTeachers',component:ListOfTeachersComponent},
{path:'formKinderGarden',component:FormKinderGardenComponent},
{path:'formChildren',component:FormChildrenComponent},
{path:'formUser',component:FormUserComponent},
{path:'formFutureData',component:FormFutureDataComponent},
{path:'KinderGardenUpdateInfo',component:KinderGardenUpdateInfoComponent},
{path:'UserUpdateInfo',component:UserUpdateInfoComponent},
{path:'FutureDataUpdateInfo',component:FutureDataUpdateInfoComponent},
{path:'ChildrenForKinderGarden',component:ChildrenForKinderGardenComponent},
{path:'TeacherHomePage/:num',component:TeacherHomePageComponent},


//{path:'ChildrenOfTecher',component:ChildrenOfTecherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecretaryMenuComponent,
    MyComComponent,
    //nPhonePipePipe,
    PhoneMaskDirective,
    DirBorderDirective,
    FilterPipe,
    LoginComponent,
    ChildrenOfParentComponent,
    ChildReportComponent,
    ChildUpdateInfoComponent,
    TeacherHomePageComponent,
    ChildrenOfTeacherComponent,
    AttendanceComponent,
    ManagerHomePageComponent,
    ListOfChildrenComponent,
    ListOfKinderGardenComponent,
    ListOfTeachersComponent,
    ListOfParentsComponent,
    FormKinderGardenComponent,
    FormChildrenComponent,
    FormUserComponent,
    FormFutureDataComponent,
    KinderGardenUpdateInfoComponent,
    UserUpdateInfoComponent,
    FutureDataUpdateInfoComponent,
    ChildrenForKinderGardenComponent,
    //ChildrenOfTecherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(Rout)

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

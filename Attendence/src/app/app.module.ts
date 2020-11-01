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
//import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { ChildrenOfParentComponent } from './children-of-parent/children-of-parent.component';
import { ChildReportComponent } from './child-report/child-report.component';
import { ChildUpdateInpoComponent } from './child-update-inpo/child-update-inpo.component';
//import { ChildrenOfTecherComponent } from './children-of-techer/children-of-techer.component';

export const Rout:Routes =[{path:'',component:HomeComponent},
{path:'seretaryMenu',component:SecretaryMenuComponent},
{path:'myCom',component:MyComComponent},
{path:'ChildrenForParent',component:ChildrenOfParentComponent},
{path:'ChildReport',component:ChildReportComponent},
{path:'ChildUpdateInpo',component:ChildUpdateInpoComponent},
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
    //FilterPipe,
    LoginComponent,
    ChildrenOfParentComponent,
    ChildReportComponent,
    ChildUpdateInpoComponent,
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

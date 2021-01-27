import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { KinderGarden } from '../models/KinderGarden';
import {KinderGardensService}from '../services/Kindergarden.service'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-teacher-home-page',
  templateUrl: './teacher-home-page.component.html',
  styleUrls: ['./teacher-home-page.component.css']
})
export class TeacherHomePageComponent implements OnInit {
  subsc:Subscription;
KinderGardens:KinderGarden[];
user:User=this.userService.user;
CUP:string;
//user:User=new User();

  constructor(private router:Router,private KinderGardenService:KinderGardensService
    ,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit() {
 //this.subsc=this.route.params.subscribe((params:any)=>{
 // this.num=params;
   //})
   this.CUP=localStorage.getItem("PermissionOfCurrentUser");
    this.selectKinderGardensByTeacherId(this.userService.user.Id);
  }
  goToAttendance(IdKg:number,nameKg:string)
  {
    this.KinderGardenService.kinderGarden.IdKinderGarden=IdKg;
    this.KinderGardenService.kinderGarden.Name=nameKg;
    this.router.navigate(['/Attendance']);
    
  }
  selectKinderGardensByTeacherId(TeacherId: string)
  {
    this.KinderGardenService.selectKinderGardensByTeacherId(this.userService.user.Id).subscribe(
      data=>{ this.KinderGardens = data; }
     )
  }
  toUpdateTeacherInfo()
  {
    this.user=this.userService.user;
    this.router.navigate(['UserUpdateInfo']);
  }
  Exit()
  {
    this.router.navigate(['']);
  }
  back()
  {
    this.router.navigate(['ListOfTeachers']);
  }
  goToChildrenForKinderGarden(IdKg:number,nameKg:string)
  {
    this.KinderGardenService.kinderGarden.IdKinderGarden=IdKg;
    this.KinderGardenService.kinderGarden.Name=nameKg;
    this.router.navigate(['ChildrenForKinderGarden']);
  }
}

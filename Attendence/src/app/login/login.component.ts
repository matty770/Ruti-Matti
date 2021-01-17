import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  listUser:User[];
  permission: number;
  array:any;
  constructor(private userService: UserService,private router:Router){}

  ngOnInit() {
  }
 Login(userId:string,name:string)
 {
 this.userService.GetUser(userId).subscribe(data=>{this.userService.user = data; 
  if(this.userService.user.Permission==1)
    this.router.navigate(['/ChildrenForParent']);
    else if(this.userService.user.Permission==2)
           this.router.navigate(['/TeacherHomePage']);
           else if(this.userService.user.Permission==3)
                 this.router.navigate(['/ManagerHomePage']);
  }
  )

 }
//
//  Login(userId:string,name:string)
//  {
//    
//    this.userService.GetAllUsers().subscribe(data=>{this.listUser=data});
//    this.array=this.listUser;
//    this.array.forEach(element => {
//      alert(element);
//      
//    });
//}
     


}

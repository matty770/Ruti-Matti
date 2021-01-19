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
  ID:string;
  array:any;
  constructor(private userService: UserService,private router:Router){
    this.userService.user=null;
  }

  ngOnInit() {
    this.userService.GetAllUsers().subscribe(data=>{this.listUser=data});
   // alert(this.listUser.length);
  }
//Login(userId:string,name:string)
//{
//this.userService.GetUser(userId).subscribe(data=>{this.userService.user = data; 
// if(this.userService.user.Permission==1)
//   this.router.navigate(['/ChildrenForParent']);
//   else if(this.userService.user.Permission==2)
//          this.router.navigate(['/TeacherHomePage']);
//          else if(this.userService.user.Permission==3)
//                this.router.navigate(['/ManagerHomePage']);
// }
// )
//
//}

  Login(userId:string,name:string)
  {
    //this.array=this.listUser;
    this.listUser.forEach(element => {
      if(element.Id==userId&&element.Name==name)
      {
        this.userService.user=element;  
      }          
    });

    if(this.userService.user!=null)
    {
      //alert(this.userService.user.Id);
      switch (this.userService.user.Permission) {
        case 1:  this.router.navigate(['/ChildrenForParent']); break;         
        case 2:  this.router.navigate(['/TeacherHomePage']); break;     
        case 3: this.router.navigate(['/ManagerHomePage']);  break;           
        }
    }
    else
      alert("שם המשתמש או הסיסמה שגויים");
  }

}

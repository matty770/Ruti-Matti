import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { $ } from 'protractor';
import { HttpParams } from '@angular/common/http';

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
  user:User;
  constructor(private userService: UserService,private router:Router){
    //this.userService.user=null;
  }

  ngOnInit() {
  //  this.userService.GetAllUsers().subscribe(data=>{this.listUser=data});
   // alert(this.listUser.length);
  }
//Login(userId:string,FirstName:string,LastName:string)
//{
//this.userService.GetUser(userId,FirstName,LastName).subscribe(data=>{this.userService.user = data; 
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

 Login(userId:string,FirstName:string,LastName:string)
 {
  localStorage.setItem("select","");
  this.userService.Login(userId,FirstName,LastName).toPromise().then(
  // subscribe(
  data=>{this.user=data;

  // this.listUser.forEach(element => {
    // if(element.Id==userId&&element.FirstName==FirstName&&element.LastName==LastName)
    // {
     //  this.userService.user=element;  
      // alert(this.userService.user.Id);
    // }          
  // });

   if(this.user!=null)
   {
     this.userService.user=this.user;
    localStorage.setItem("PermissionOfCurrentUser",this.user.Permission.toString());
    localStorage.setItem("NameOfCurrentUser",this.user.FirstName+this.user.LastName);
     //alert(this.userService.user.Id);
     switch (this.user.Permission) {
       case 1:  this.router.navigate(['/ChildrenForParent']); break;         
       case 2:  this.router.navigate(['/TeacherHomePage']); break;     
       case 3: this.router.navigate(['/ManagerHomePage']);  break;     
       case 4: {
        if(confirm(" משתמש יקר! הנך רשום במערכת כהורה וכגננת באיזו האם תרצה להכנס כגננת?")==true)
        this.router.navigate(['/TeacherHomePage']);
        else this.router.navigate(['/ChildrenForParent']);break;
              }    
       }
   }
   else
     alert("שם המשתמש או הסיסמה שגויים");
    });
 }
}

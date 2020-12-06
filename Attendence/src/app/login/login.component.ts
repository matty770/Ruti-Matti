import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  permission: number;
  constructor(private userService: UserService,private router:Router){}

  ngOnInit() {
  }
  Login(userId:string)
  {
    
 // this.userService.GetPermissionOfUser(userId).subscribe
 //   (
  //    data=>{this.permission=data;
 //       switch(this.permission)
 //      {
   //       case 1:{
  //         this.router.navigate(['/ChildrenForParent',{data}]);
     //     return;}
   //       case 2:{
    //        this.router.navigate(['/TeacherHomePage',{data}]);
  //        return;}  
      //  }
    //  }
  //  )
   this.userService.GetUser(userId).subscribe(
    data=>{this.user = data; 
  

     this.router.navigate(['/ChildrenForParent',{data}]);
// צריך כאן לעשות חיפוש לפי פרמישן לאיזה קומפוננטנה להפנות את המשתמש
       // if(data!=null)
      //  {
      //    this.router.navigate(['/ChildrenForParent',{data}]);
      //    alert(data.PhoneNum);
      //  }     
      //  else
      //  alert("hjuygu");


 }
  )
    

  }
}

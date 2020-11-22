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
  constructor(private userService: UserService,private router:Router){}

  ngOnInit() {
  }
  Login(userId:string)
  {
     this.userService.GetUser(userId).subscribe(
      data=>{this.user = data; 
        if(data!=null)
        {
          this.router.navigate(['/ChildrenForParent',{data}]);
          alert(data.PhoneNum);
        }
       
        else
        alert("hjuygu");
      }
     )
    

  }
}

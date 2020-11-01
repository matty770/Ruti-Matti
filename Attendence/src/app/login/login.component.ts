import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor(private userService: UserService){}

  ngOnInit() {
  }
  Login(userId:string)
  {
     this.userService.GetUser(userId).subscribe(
      data=>{this.user = data;}
     )
  }
}

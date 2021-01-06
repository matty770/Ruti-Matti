import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
user:User=new User();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  addUser(UserForm)
  {
    
   //this.user.Permission=this.userService.user.Permission;
    this.userService.addUser(this.user);
    UserForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update-info',
  templateUrl: './user-update-info.component.html',
  styleUrls: ['./user-update-info.component.css']
})
export class UserUpdateInfoComponent implements OnInit {

  constructor(private userService:UserService) { }
user:User=this.userService.user;
  ngOnInit() {
  }

  updateUser(UserUpdateForm)
  {
    this.userService.updateUser(this.user);
  }
}

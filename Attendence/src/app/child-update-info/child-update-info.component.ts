import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/Child.service';
import { Child } from 'src/app/models/Child';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-update-info',
  templateUrl: './child-update-info.component.html',
  styleUrls: ['./child-update-info.component.css']
})
export class ChildUpdateInfoComponent implements OnInit {
  

  constructor(private router:Router, private childService:ChildService,private userService:UserService) { }
  child:Child=this.childService.child;
  user:User=new User()
  ngOnInit() {
    this.userService.selectUserByIdChild(this.child.Id).subscribe(
      data=>{this.user = data});
  }
  UpdateChild(ChildrenUpdateForm)
  {
    this.user.Address=this.child.Address;
    this.user.PhoneNum=this.child.Phone;
    this.childService.UpdateChildren(this.child);
    this.userService.updateUser(this.user);
  }
  goToChildernOfParent()
    {
      this.router.navigate(['/ChildrenForParent'])
    }
    Exit()
    {
      this.router.navigate(['']);
    }
}

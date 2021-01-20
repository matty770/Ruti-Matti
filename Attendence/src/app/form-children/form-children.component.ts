import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/Child';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css']
})
export class FormChildrenComponent implements OnInit {

 
  constructor(private childrenService:ChildService,private userService:UserService,) {
   }
child:Child=new Child();
user:User=new User();
 isFound:number=9;
  ngOnInit() {
   
  }

  addChildren(ChildrenForm)
  {
    this.userService.UserIs(this.child.ParentCode).subscribe
    (data=>{ this.isFound = data; });
    //doesn't allow to add child
    this.child.Active=1;
    this.user.Active=1;
    this.user.PhoneNum=this.child.Id;
    this.user.Id=this.child.ParentCode;
    this.user.Address=this.child.Address;
    this.user.Permission=1;

if(this.isFound==0)
{
  alert(this.user.FirstName+" "+this.user.LastName);
  this.userService.addUser(this.user);
}
alert(this.isFound);
this.childrenService.addChildren(this.child);
ChildrenForm.reset();
   
  }
}

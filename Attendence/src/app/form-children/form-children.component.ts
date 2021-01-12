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
child:Child=new Child();
user:User=new User();

  constructor(private childrenService:ChildService,private userService:UserService) { }

  ngOnInit() {
  }

  addChildren(ChildrenForm)
  {
    alert(this.child.Address);
    //doesn't allow to add child
    this.user.PhoneNum=this.child.Id;
    this.user.Id=this.child.ParentCode;
    this.user.Address=this.child.Address;
    this.user.Permission=1;
    this.userService.addUser(this.user);


    this.childrenService.addChildren(this.child);

    
  
    
    ChildrenForm.reset();
   
  }
}

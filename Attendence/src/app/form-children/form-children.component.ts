import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/Child';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import isIsraeliIdValid from 'israeli-id-validator';
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
    if(isIsraeliIdValid(this.child.Id)==true&&isIsraeliIdValid(this.child.ParentCode)==true)
    {
      this.userService.UserIs(this.child.ParentCode).subscribe
      (data=>{ this.isFound = data; });
      if(this.isFound==0)
       {
        this.user.Active=1;
        this.user.PhoneNum=this.child.Id;
        this.user.Id=this.child.ParentCode;
        this.user.Address=this.child.Address;
        this.user.Permission=1;
        this.userService.addUser(this.user);
       }
       this.child.Active=1;
       this.childrenService.addChildren(this.child);
       ChildrenForm.reset();
    }
    else
    {
      if(isIsraeliIdValid(this.child.Id)==false&&isIsraeliIdValid(this.child.Id)==false)
      {
        alert("תעודת זהות של ההורה ושל הילד אינם תקינים");
      }
      else if(isIsraeliIdValid(this.child.Id)==false)
      {
        alert("תעודת זהות של הילד אינה תקינה");
      }
      else alert("תעודת זהות של ההורה אינה תקינה");

    }
  }
}

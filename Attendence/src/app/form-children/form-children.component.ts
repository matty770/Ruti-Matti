import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/Child';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import isIsraeliIdValid from 'israeli-id-validator';
import { KinderGarden } from '../models/KinderGarden';
import { KinderGardensService } from '../services/Kindergarden.service';
import { ChildParent } from '../models/ChildParent';
@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css']
})
export class FormChildrenComponent implements OnInit {

 
  constructor(private childrenService:ChildService,private userService:UserService,private kinderGardenService:KinderGardensService) {
   }
childParent:ChildParent=new ChildParent();
user:User=new User();
 isFound:number=9;
 ListKinderGarden:KinderGarden[];
  ngOnInit() {
    this.getKinderGardenList();
  }
getKinderGardenList()
{
  this.kinderGardenService.GetAllKinderGarden().subscribe(
      data=>{this.ListKinderGarden=data;});
}
  addChildren(ChildrenForm)
  {
    if(isIsraeliIdValid(this.childParent.ChildId)==true&&isIsraeliIdValid(this.childParent.parentCode)==true)
    {
     // this.userService.UserIs(this.childParent.ParentId).toPromise().then
     // (data=>{ this.isFound = data;
      //if(this.isFound==0)
      // {
        this.childParent.active=1;
        this.childParent.ParentId=this.childParent.parentCode;
        this.childParent.address=this.childParent.address;
       // this.user.Permission=1;
        //this.userService.addUser(this.user);//.toPromise().then() יש כאן בעיה חמורה!!!!
        this.childrenService.addChildren(this.childParent);      
      // this.child.Active=1;
      // this.childrenService.addChildren(this.child);
       ChildrenForm.reset();      
     // });
    }
    else
    {
      if(isIsraeliIdValid(this.childParent.ChildId)==false&&isIsraeliIdValid(this.childParent.parentCode)==false)
      {
        alert("תעודת זהות של ההורה ושל הילד אינם תקינים");
      }
      else if(isIsraeliIdValid(this.childParent.ChildId)==false)
      {
        alert("תעודת זהות של הילד אינה תקינה");
      }
      else alert("תעודת זהות של ההורה אינה תקינה");

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { ChildService } from 'src/app/services/Child.service';
import { Child } from 'src/app/models/Child';

@Component({
  selector: 'app-list-of-parents',
  templateUrl: './list-of-parents.component.html',
  styleUrls: ['./list-of-parents.component.css']
})
export class ListOfParentsComponent implements OnInit {
ParentList:User[];
select:string="";
children:Child[];
idParent:string;
  constructor(private UserService:UserService, private router:Router,private childService:ChildService) { }
  GetAllParents()
  { 
      
    this.UserService.SelectParentOrTechers(1).subscribe(
      data=>{this.ParentList = data;})     
  }
  
  ngOnInit() {
    this.GetAllParents();
  }

 //GoToAddParent()
 //{
 //  this.UserService.permission=1;
 //  this.router.navigate(['formUser']);
 //}
  goToChildrenOfParent(parent:User)
  {
    this.childService.selectChildrenByParentId(parent.Id).subscribe(
      data=>{this.children = data; },
      error=>{console.log("error:" + error);}
     )
    this.UserService.user=parent;
    this.idParent=parent.Id;
    alert(this.children.length);
    //this.router.navigate(['ChildrenForParent']);
  }
  Exit()
  {
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ChildService } from 'src/app/services/Child.service';
import { Child } from 'src/app/models/Child';
import { UserService } from 'src/app/services/user.service';
import { FutureDataService } from 'src/app/services/future-data.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-children-of-parent',
  templateUrl: './children-of-parent.component.html',
  styleUrls: ['./children-of-parent.component.css']
})
export class ChildrenOfParentComponent implements OnInit {
  subscription: Subscription;
  listChildren:any[];
  user:User=this.userService.user;
  children:Child[];
  CUP:string;
  
  constructor(private rout:Router,private childService:ChildService,private userService:UserService
    ,private futureDataService:FutureDataService) { }
  goToReport(child:Child)
  {    
    this.futureDataService.futureData.IdChild=child.Id; 
    this.futureDataService.futureData.KinderGardenCode=child.KinderGardenCode;
    alert(this.futureDataService.futureData.IdChild); 
    this.rout.navigate(['/ChildReport']);
  }
  goToDetails(children:Child)
  {
    this.childService.child=children;
    this.rout.navigate(['/ChildUpdateInfo']);
  }
  selectChildrenByParentId()
  {
    this.childService.selectChildrenByParentId(this.userService.user.Id).subscribe(
      data=>{this.children = data; }
     )
  }
  ngOnInit() {
    this.selectChildrenByParentId();
    this.CUP=localStorage.getItem("PermissionOfCurrentUser");
  }
  Exit()
  {
    this.rout.navigate(['']);
  }
  GoBack()
  {
    this.rout.navigate(['ListOfParent']);
  }
}

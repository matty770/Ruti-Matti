import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ChildService } from 'src/app/services/Child.service';
import { Child } from 'src/app/models/Child';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-children-of-parent',
  templateUrl: './children-of-parent.component.html',
  styleUrls: ['./children-of-parent.component.css']
})
export class ChildrenOfParentComponent implements OnInit {
  subscription: Subscription;
  listChildren:any[];
  children:Child[];

  constructor(private rout:Router,private childService:ChildService,private userService:UserService) { }
  goToReport()
  {   
    this.rout.navigate(['/ChildReport']);
  }
  goToDetails()
  {
    this.rout.navigate(['/ChildUpdateInfo']);
  }

  ngOnInit() {
    
  }
  selectChildrenByParentId(ParentId: string)
  {
    
    this.childService.selectChildrenByParentId(this.userService.user.Id).subscribe(
      data=>{this.children = data;
      if(data!=null)
      alert("bhbhbhb");
     }
     )
  }
}

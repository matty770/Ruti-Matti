import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-of-parents',
  templateUrl: './list-of-parents.component.html',
  styleUrls: ['./list-of-parents.component.css']
})
export class ListOfParentsComponent implements OnInit {
ParentList:User[];

  constructor(private UserService:UserService, private router:Router) { }
  GetAllParents()
  { 
      
    this.UserService.SelectParentOrTechers(1).subscribe(
      data=>{this.ParentList = data;})     
  }
  
  ngOnInit() {
    this.GetAllParents();
  }

  GoToAddParent()
  {
    this.router.navigate(['formUser']);
  }
}

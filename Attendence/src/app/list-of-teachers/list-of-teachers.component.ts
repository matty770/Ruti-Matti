import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-list-of-teachers',
  templateUrl: './list-of-teachers.component.html',
  styleUrls: ['./list-of-teachers.component.css']
})
export class ListOfTeachersComponent implements OnInit {
  TeacherList:User[];
  constructor(private UserService:UserService, private router:Router) { }
  GetAllParents()
  {   
    this.UserService.GetAllTeachers().subscribe(
      data=>{this.TeacherList = data;})      
  }
  ngOnInit() {
    this.GetAllParents();
  }
  GoToAddTeacher()
  {
    this.router.navigate(['formUser']);
  }
}

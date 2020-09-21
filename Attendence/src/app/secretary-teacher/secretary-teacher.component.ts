import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { teacher } from '../secretary-teacher/teacher';
import { ServerService } from 'src/app/services/server.service';
import{HomeComponent} from 'src/app/home/home.component';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-secretary-teacher',
  templateUrl: './secretary-teacher.component.html',
  styleUrls: ['./secretary-teacher.component.css']
})
export class SecretaryTeacherComponent implements OnInit {
  search = "";

 
  
 teachers:teacher[]=[];
 dis:boolean = false;
 chek:boolean;
 title:string;
  constructor(private server:TeacherServiceService) { 

 server.GetAllStudents().subscribe((res) => {
  this.teachers = res;
});
  }
  
  ngOnInit() {
  }
  onAddTeacher(t:teacher){
    //this.server.addTeacher(t);
    this.chek=false;
  }

  
 Edit()
 {
  this.dis=true;
 }
 Save()
 {
  this.dis=false;
 }

}

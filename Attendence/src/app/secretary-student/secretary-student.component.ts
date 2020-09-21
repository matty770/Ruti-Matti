import { Component, OnInit,NgModule } from '@angular/core';
import { Student } from './student'
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';
@Component({
  selector: 'app-secretary-student',
  templateUrl: './secretary-student.component.html',
  styleUrls: ['./secretary-student.component.css']
})
export class SecretaryStudentComponent implements OnInit {
  students:Student[]=[];
  dis:boolean = false;
  chek:boolean;
  title:string;
  name: string;
  search:string;
  constructor(private ARS: ActivatedRoute,private server:ServerService) {
  
    ARS.params.subscribe((newValue)=>{
      this.search = newValue.studentName;
    });
    this.students=server.getStudent();
  }
  ngOnInit() {
  }
  onAddStudent(s:Student){
    this.server.addStudent(s);
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


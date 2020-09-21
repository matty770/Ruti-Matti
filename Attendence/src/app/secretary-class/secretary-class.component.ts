import { Component, OnInit } from '@angular/core';
import {Classes} from 'src/app/secretary-class/class'
import { Student } from 'src/app/secretary-student/student';
import { ServerService } from 'src/app/services/server.service';
@Component({
  selector: 'app-secretary-class',
  templateUrl: './secretary-class.component.html',
  styleUrls: ['./secretary-class.component.css']
})
export class SecretaryClassComponent implements OnInit {
 classes:Classes;
 students:Student[]=[];
 name:string;
  constructor(server:ServerService) {
    this.students=server.getStudent();
    this.classes=new Classes();
    this.classes.name="מדברות";
    this.classes.numOfStudents=50;
   }

  ngOnInit() {
  }

}

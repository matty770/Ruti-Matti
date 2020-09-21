import { Component, OnInit,Output, EventEmitter,Input,NgModule} from '@angular/core';
import { teacher } from '../secretary-teacher/teacher';
@Component({
  selector: 'app-new-secretary-teacher',
  templateUrl: './new-secretary-teacher.component.html',
  styleUrls: ['./new-secretary-teacher.component.css']
})
export class NewSecretaryTeacherComponent implements OnInit {
  @Output() teacherAdded = new EventEmitter<teacher>();
  thisTeacher : teacher;
  constructor() { this.thisTeacher=new teacher("",44,"098776541","nnn",77);}

  ngOnInit() {
  }
  AddTheTeacher(teachrForm){
    var newTeacher = new teacher(this.thisTeacher.name,this.thisTeacher.id,this.thisTeacher.phoneNumber,this.thisTeacher.classLevel,this.thisTeacher.numGroup);
    this.teacherAdded.emit(newTeacher);
    teachrForm.reset();
    
  }

}

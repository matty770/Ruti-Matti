import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Student } from 'src/app/secretary-student/student';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  @Output() studentAdded = new EventEmitter<Student>();
  thisStudent : Student;
  constructor() { this.thisStudent=new Student("shoshi","6533258","S0523698852",5,"דוברות");}

  ngOnInit() {
  }
  AddTheStudent(studentForm){
    var newStudent = new Student(this.thisStudent.name,this.thisStudent.id,this.thisStudent.phoneNumber,this.thisStudent.groupNum,this.thisStudent.classLevel);
    this.studentAdded.emit(newStudent);
    studentForm.reset();
    
  }

}

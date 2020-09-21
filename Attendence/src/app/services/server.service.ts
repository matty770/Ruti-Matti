import { Injectable } from '@angular/core';
import { teacher } from '../secretary-teacher/teacher';
import { Student } from '../secretary-student/student';
import {Classes} from '../secretary-class/class';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  teachers:teacher[]=[];
  students:Student[]=[];
  classes:Classes[]=[];
  constructor() {
    this.teachers=
    [new teacher("chana glick",123456789,"0527137311","מדברות",1),new teacher("frida choen",111111111,"098765456","מתקדמות",2),
    new teacher("bracha glazer",323767012,"8887927","מתקדמות-",1)];
    this.students=[new Student("brach","123654789","0533125586",5,"מתקדמות"),new Student("chevi","1235554789","0533125586",5,"מתקדמות")];
   
   }
   getTeachers()
   {
     return this.teachers;
  }
   getStudent()
   {
     return this.students;
   }
   getClass()
   {
     return this.classes;
   }
   addTeacher(t:teacher)
   {
     this.teachers.push(t);
   }
   addStudent(s:Student)
   {
     this.students.push(s);
   }
   addClass(c:Classes)
   {
     this.classes.push(c);
   }
 
  
}

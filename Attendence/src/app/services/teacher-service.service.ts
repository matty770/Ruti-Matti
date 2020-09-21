import { Injectable } from '@angular/core';
import { teacher } from '../secretary-teacher/teacher';
import { HttpClient, HttpParams, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private http:HttpClient) { }
  //GetAllUsers():Observable<teacher[]>{
    //return this.http.get<teacher[]>('http://localhost:56621/api/user');

baseUrl = "http://localhost:56621";

GetAllStudents(): Observable<teacher[]> {

  //let param = new HttpParams();
  //param = param.set("userClass", "8");
  //param = param.set("id", "123456");

 // let options = { "params": param };
  return this.http.get<teacher[]>(this.baseUrl + '/api/Teacher');
  
}
}



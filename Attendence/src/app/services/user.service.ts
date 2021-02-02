import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { User } from '../models/User';
import { DataService } from 'src/app/services/data.service';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FormArray } from '@angular/forms/src/model';
import { last } from '@angular/router/src/utils/collection';
import { error } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root' 
})
export class UserService {
  num:number=null;
   public user:User=new User();
   permission:number;
  constructor(private http: DataService) { }

GetAllUsers():Observable<User[]>
{
  return this.http.Get('User');
}
  SelectParentOrTechers(permission:number):Observable<User[]>
  {
    alert(permission);
    return this.http.Get('User?p='+permission);
  }
 //GetUser(userId: string,firstName:string,lastName:string): Observable<User> {
 //  alert(lastName);
 //  return this.http.Get('User? "userId=" + userId + "&firstName=firstName&lastName=lastName');
 //}
 
  GetUser(userId: string,firstName:string,lastName:string): Observable<User> {   
    return this.http.Get('User?userId='+ userId + '&firstName='+firstName+'&lastName='+lastName);
  }
  GetPermissionOfUser(userId :string): Observable<number>{
    return this.http.Get('User?userId='+userId);
  }
  addUser(user:User)
  { 
    this.http.post('User?nameFunction=add',user)
    .subscribe(res=>{ if(res==0) alert("המשתמש כבר קיים") //console.log(res)//
    },error=>{alert("ארע תקלה בהכנסת המשתמש")});
  }
  selectUserByIdChild(idChild:string) :Observable<User>
  {
    return this.http.Get('User?idChild='+idChild);
  }
  updateUser(user:User)
  {
    this.http.post('User?nameFunction=update',user).subscribe(res=>{alert(res)});
  }
  UserIs(idUser:string):Observable<number>
  {
    return this.http.Get('User?idUser='+idUser);
  }
  addKinderGardenToTeacher(KGCode:number,Id:string)
  {
    this.http.post('User?nameFunction=addKGToTeachet'+ '&KGCode='+KGCode,Id).subscribe(res=>{alert(res)});
  }
  addTeacher(KGCode:number,teacher:User)
  {
    this.http.post('User?nameFunction=addTeacher'+ '&KGCode='+KGCode,teacher).subscribe
    (res=>{alert("הגננת נכנסה למערכת בהצלחה")},error=>{alert("ארע תקלה בהכנסת הנתונים")});
    
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { DataService } from 'src/app/services/data.service';


@Injectable({
  providedIn: 'root' 
})
export class UserService {
   public user:User=new User();
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
  GetUser(userId: string): Observable<User> {
    return this.http.Get('User?userId=' + userId);
  }
  GetPermissionOfUser(userId :string): Observable<number>{
    alert("ddd");
    return this.http.Get('User?userId='+userId);
  }
  addUser(user:User)
  { 
    this.http.post('User',user)
    .subscribe(res=>{ alert(res) //console.log(res)//
    });
  }
  selectUserByIdChild(idChild:string) :Observable<User>
  {
    return this.http.Get('User?idChild='+idChild);
  }
  updateUser(user:User)
  {
    this.http.post('User?x='+1,user).subscribe(res=>{alert(res)});
  }
  UserIs(idUser:string):Observable<number>
  {
    return this.http.Get('User?idUser='+idUser);
  }
  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Child } from 'src/app/models/Child';
@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http:DataService,private userService:UserService) {}

   selectChildrenByParentId(ParentId:string): Observable <Child[]> {
    return this.http.Get('Children?ParentId=' + ParentId);}
}

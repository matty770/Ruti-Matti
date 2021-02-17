import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Child } from 'src/app/models/Child';
import { ChildParent } from '../models/ChildParent';
@Injectable({
  providedIn: 'root'
})
export class ChildService
 {
  public child:Child=new Child();
  constructor(private http:DataService,private userService:UserService) {}
  
   selectChildrenByParentId(ParentId:string): Observable <Child[]> {
    return this.http.Get('Children/selectChildrenByParentId?ParentId=' + ParentId);}
    
    addChildren(child:ChildParent, file: File)
    {
      let formData = new FormData();
      formData.append('child', JSON.stringify(child));
      formData.append('file', file, file.name);
     // this.http.post('Children?nameFunction=add',child)
    this.http.post1('Children/add',formData).subscribe(res=>{  console.log(res)
    },error=>{alert(error.message);console.log(error+" eeeeeeeeeeeee");});/*alert(error.Message) */
    }
    getAllChildrens():Observable<Child[]>
    {
      return this.http.Get('Children/getAllChildrens');
    }
    UpdateChildren(children:Child,)
    {
      this.http.post('Children/UpdateChildren',children).subscribe(res=>{alert(res)});
    }
    getChildsByKinderGarden(kinderGardenCode:number):Observable<Child[]>
    {
      return this.http.Get('Children/getChildsByKinderGarden?kinderGardenCode='+kinderGardenCode);
    }
    changeToNotActive(idChild:string):Observable<boolean>
    {
      return this.http.Get('Children/changeToNotActive?idChild='+idChild);
    }
}


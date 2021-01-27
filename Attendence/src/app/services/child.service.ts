import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Child } from 'src/app/models/Child';
@Injectable({
  providedIn: 'root'
})
export class ChildService
 {
  public child:Child=new Child();
  constructor(private http:DataService,private userService:UserService) {}
  
   selectChildrenByParentId(ParentId:string): Observable <Child[]> {
    return this.http.Get('Children?ParentId=' + ParentId);}
    
    addChildren(child:Child)
    {
      this.http.post('Children?nameFunction=add',child)
      .subscribe(res=>{ alert(res)
         //console.log(res)//
      }
      ); 
    }
    getAllChildrens():Observable<Child[]>
    {
      return this.http.Get('Children');
    }
    UpdateChildren(children:Child,)
    {
      this.http.post('Children?nameFunction=update',children).subscribe(res=>{alert(res)});
    }
   // removeChild(child:Child)
   // {
   //   this.http.post('Children?nameFunction=remove',child).subscribe(res=>{alert(res)});
   // }
    getChildsByKinderGarden(kinderGardenCode:number):Observable<Child[]>
    {
      return this.http.Get('Children?kinderGardenCode='+kinderGardenCode);
    }
    changeToNotActive(idChild:string):Observable<boolean>
    {
      return this.http.Get('Children?idChild='+idChild);
    }

}


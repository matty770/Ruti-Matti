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
      alert(child.Id);
      this.http.post('Children',child)
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
      this.http.post('Children?x='+1,children).subscribe(res=>{alert(res)});
    }

}


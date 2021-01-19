import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { KinderGarden } from 'src/app/models/kindergarden';

@Injectable({
  providedIn: 'root'
})

export class KinderGardensService 
{
 
public ListkinderGarden:KinderGarden[];
public kinderGardenCode:number;
kg:KinderGarden=new KinderGarden();
  constructor(private http:DataService,private userService:UserService) {}
public kinderGarden:KinderGarden=new KinderGarden();
  selectKinderGardensByTeacherId(TeacherId:string): Observable <KinderGarden[]> 
  {
    return this.http.Get('KinderGarden?TeacherId=' + TeacherId);
  }
    
    addKinderGarden(kinderGarden:KinderGarden)
    {
      this.http.post('KinderGarden?A=add',kinderGarden)
      .subscribe(res=>{ alert(res) //console.log(res)//
      });
      
    }
    GetAllKinderGarden(): Observable<KinderGarden[]>
    {
      return this.http.Get('KinderGarden');
    }
    
    updateKinderGarden(kinderGarden:KinderGarden)
    {
      alert(kinderGarden.IdKinderGarden);
      this.http.post('KinderGarden?A=update',kinderGarden).subscribe(res=>{ alert(res)});
      //.subscribe(res=>{ alert(res)})
    }
//
    RemoveKinderGarden(kinderGardenCode:number)
    {
      
     this.http.post('KinderGarden?A=remove',kinderGardenCode).subscribe(res=>{ alert(res)});
    }

      
  
  }

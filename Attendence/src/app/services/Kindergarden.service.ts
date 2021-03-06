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
    return this.http.Get('KinderGarden/selectKinderGardensByTeacherId?TeacherId=' + TeacherId);
  }
    
    addKinderGarden(kinderGarden:KinderGarden)
    {
    return this.http.post('KinderGarden/addKinderGarden',kinderGarden)
      
    }
    GetAllKinderGarden(): Observable<KinderGarden[]>
    {
      return this.http.Get('KinderGarden/GetAllKinderGarden');
    }
    
    updateKinderGarden(kinderGarden:KinderGarden)
    {
     this.http.post('KinderGarden/updateKinderGarden',kinderGarden).subscribe(res=>{ alert(res)});
    }
    GetKinderGarden(kinderGardenCode:number): Observable<KinderGarden>
    {
      return this.http.Get('KinderGarden/GetKinderGarden?KGCode='+kinderGardenCode);
    }

      
  
  }

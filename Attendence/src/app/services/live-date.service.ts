import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LiveData, Statuses } from '../models/LiveData';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LiveDateService {
  
  //params = new HttpParams();
  
  constructor(private http: DataService) { }

  GetLiveDate(KinderGardenCode: number): Observable<LiveData[]> {
    return this.http.Get('LiveData?KinderGardenCode=' + KinderGardenCode);
  }

  ChangeStatus(idChild:string,status:Statuses)
  {
   //this.params.set('status',status.toString());
   let params = new HttpParams();
    params = params.append('status', '3');

   // this.http.post('LiveData?idChild='+idChild,{params:params}).subscribe(res=>{ alert(res)
      this.http.post('LiveData?idChild='+idChild,status).subscribe(res=>{ alert(res)

     // alert(status);
     //this.http.post('LiveData?idChild='+idChild,{params:params}).subscribe(res=>{ alert(res) //console.log(res)//
     });
  }
}

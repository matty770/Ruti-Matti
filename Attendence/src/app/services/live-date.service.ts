import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LiveData, Statuses } from '../models/LiveData';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LiveDateService {

  constructor(private http: DataService) { }

  GetLiveDate(KinderGardenCode: number): Observable<LiveData[]> {
    return this.http.Get('LiveData?KinderGardenCode=' + KinderGardenCode);
  }
  ChangeStatus(idChild:string,status:Statuses)
  {
    alert(status);
     this.http.post('LiveData?idChild='+idChild,status).subscribe(res=>{ alert(res) //console.log(res)//
     });
  }
}

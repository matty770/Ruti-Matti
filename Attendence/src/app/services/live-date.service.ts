import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LiveData, Statuses } from '../models/LiveData';
import { DataService } from './data.service';
import { Attendance } from 'src/app/models/Attendance';

@Injectable({
  providedIn: 'root'
})
export class LiveDateService {
  constructor(private http: DataService) { }
  GetLiveDataByKinderGardenCode(KinderGardenCode: number): Observable<LiveData[]> {
    return this.http.Get('LiveData/GetLiveDataByKinderGardenCode?KinderGardenCode=' + KinderGardenCode);
  }
  ChangeStatus(idChild:string,status:Statuses)
  {
      this.http.post('LiveData/ChangeStatus?idChild='+idChild,status).subscribe(res=>{ alert(res)
     });
  }
  copyToAttendance(idKinderGarden:number):Observable<Attendance[]>
  {
    return this.http.Get("LiveData/copyToAttendance?idKinderGarden="+idKinderGarden);
  }
}
 
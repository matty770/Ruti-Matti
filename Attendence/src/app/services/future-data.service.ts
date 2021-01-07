import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs/internal/Observable';
import { FutureData } from 'src/app/models/FutureData';
import { Child } from 'src/app/models/Child';

@Injectable({
  providedIn: 'root'
})
export class FutureDataService {

  public futureData:FutureData=new FutureData();
  constructor(private http:DataService ) { }
  GetFutureData(ChildId:string):Observable<FutureData>
  {
    return this.http.Get('FutureData?ChildId='+ChildId);
  }
}

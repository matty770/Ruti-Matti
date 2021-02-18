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
  GetFutureData(ChildId:string):Observable<FutureData[]>
  {
    return this.http.Get('FutureData/GetFutureData?ChildId='+ChildId);
  }

  addFutureData(futureData:FutureData)
  {
    this.http.post('FutureData/addFutureData',futureData)
    .subscribe(res=>{ //alert(res) //console.log(res)//
    });
  }
  updateFutureData(futureData:FutureData)
  {
    this.http.post('FutureData/updateFutureData',futureData).subscribe(res=>{alert(res)});
  }
  removeFutureData(futureData:FutureData)
  {
    this.http.post('FutureData/removeFutureData',futureData).subscribe(res=>{alert(res)});
  }
}

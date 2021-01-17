import { Component, OnInit } from '@angular/core';
import { FutureDataService } from 'src/app/services/future-data.service';
import { FutureData } from '../models/FutureData';
import {Router} from '@angular/router';
//import { time } from 'console';

@Component({
  selector: 'app-child-report',
  templateUrl: './child-report.component.html',
  styleUrls: ['./child-report.component.css']
})
export class ChildReportComponent implements OnInit {
FutureDataList:FutureData[];
  constructor(private futureDataService:FutureDataService, private rout:Router) { }
  GetFutureData()
  {   
    return this.futureDataService.GetFutureData(this.futureDataService.futureData.IdChild).subscribe(
      data=>{this.FutureDataList = data;})
  }
  ngOnInit() {
    this.GetFutureData();
  }
  goToFutureDataForm(){
    
    this.rout.navigate(['/formFutureData']);
  }
  goToDetails(futureData:FutureData){
    this.futureDataService.futureData=futureData;
    this.rout.navigate(['FutureDataUpdateInfo'])
  }
  removeFutureData(futureData:FutureData)
  {
    this.futureDataService.removeFutureData(futureData);
  }

}

import { Component, OnInit } from '@angular/core';
import { FutureDataService } from 'src/app/services/future-data.service';
import { FutureData } from '../models/FutureData';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { ChildParent } from '../models/ChildParent';
import { ChildService } from '../services/Child.service';
import { Child } from '../models/Child';

@Component({
  selector: 'app-child-report',
  templateUrl: './child-report.component.html',
  styleUrls: ['./child-report.component.css'],
  providers: [DatePipe]
})

export class ChildReportComponent implements OnInit {

  FutureDataList:FutureData[];

  constructor(private datePipe: DatePipe,private futureDataService:FutureDataService, private rout:Router,private childService:ChildService) { }

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
    this.futureDataService.removeFutureData(futureData).toPromise().then((res)=>{
      this.rout.navigate(['/ChildrenForParent'])},error =>{console.log(error)});
  }
  goToChildernOfParent()
    {
      this.rout.navigate(['/ChildrenForParent'])
    }
    Exit()
  {
    this.rout.navigate(['']);
  }
}

import { DatePipe } from '@angular/common';
import { toDate } from '@angular/common/src/i18n/format_date';
import { Component, OnInit } from '@angular/core';
import { FutureData, Statuses } from '../models/FutureData';
import { FutureDataService } from '../services/future-data.service';

@Component({
  selector: 'app-form-future-data',
  templateUrl: './form-future-data.component.html',
  styleUrls: ['./form-future-data.component.css']
})
export class FormFutureDataComponent implements OnInit {
 futureData:FutureData=new FutureData();
 ST:string;
 now:DatePipe;
  d:Date=new Date()
  constructor(private futureDataService:FutureDataService) { }

  ngOnInit() {
  }
  addFutureData(FutureDataForm)
  {
    this.futureData.IdChild=this.futureDataService.futureData.IdChild;
    this.futureData.KinderGardenCode=this.futureDataService.futureData.KinderGardenCode;
    switch(this.ST)
    {
    case "1": this.futureData.Status=Statuses.Late;
    case "2": this.futureData.Status=Statuses.NonPresent;
    };
    //this.futureData.UpdateDate=Date.now()
   alert(this.futureData.UpdateDate);
    this.futureDataService.addFutureData(this.futureData);
    FutureDataForm.reset();
  }
}
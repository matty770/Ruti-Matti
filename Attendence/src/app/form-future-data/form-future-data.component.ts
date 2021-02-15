import { DatePipe } from '@angular/common';
import { toDate } from '@angular/common/src/i18n/format_date';
import { Component, OnInit } from '@angular/core';
import { FutureData, Statuses } from '../models/FutureData';
import { FutureDataService } from '../services/future-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-future-data',
  templateUrl: './form-future-data.component.html',
  styleUrls: ['./form-future-data.component.css']
})
export class FormFutureDataComponent implements OnInit {
 futureData:FutureData=new FutureData();
 ST:string;
 now:DatePipe;
 idChild:string=this.futureDataService.futureData.IdChild;
 select:string="";
 days:number;
  d:Date=new Date()
  date2:Date = new Date();
  constructor(private futureDataService:FutureDataService, private router:Router) { }

  ngOnInit() {
  }
  addFutureData(FutureDataForm)
  {
    alert("ff");
    this.futureData.IdChild=this.idChild;
    this.futureData.KinderGardenCode=this.futureDataService.futureData.KinderGardenCode;
    switch(this.ST)
    {
    case "1": this.futureData.Status=Statuses.Late;
    case "2": this.futureData.Status=Statuses.NonPresent;
    };
    this.futureData.UpdateDate=(new Date());
    alert(this.futureData.Date.getDate());
    this.days=this.futureData.Date.getDate()-this.date2.getDate();
    alert(this.days);
    var i=0;
    do
   {
    this.futureData.Date.setDate(this.futureData.Date.getDate()-this.days-i);
    this.futureDataService.addFutureData(this.futureData);
   } while( i<this.days );
    FutureDataForm.reset();
  }
  GoBack()
  {
    this.router.navigate(['/ChildReport']);
  }
}

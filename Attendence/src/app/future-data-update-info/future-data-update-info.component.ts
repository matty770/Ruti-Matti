import { Component, OnInit } from '@angular/core';
import { FutureData } from 'src/app/models/FutureData';
import { FutureDataService } from 'src/app/services/future-data.service';
import { Statuses } from 'src/app/models/LiveData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future-data-update-info',
  templateUrl: './future-data-update-info.component.html',
  styleUrls: ['./future-data-update-info.component.css']
})
export class FutureDataUpdateInfoComponent implements OnInit {


  constructor(private futureDataService:FutureDataService,private rout:Router) { }
  futureData:FutureData=this.futureDataService.futureData;
  ST:string;
  ngOnInit() {
    this.convertStatusToString();
  }

  updateFutureData()
  {
   switch(this.ST)
   {
   case "1": this.futureData.Status=Statuses.Late;
   case "2": this.futureData.Status=Statuses.NonPresent;
   };
     this.futureData.UpdateDate=(new Date);
    this.futureDataService.updateFutureData(this.futureData);
    this.rout.navigate(['ChildReport']);
   // this.Back();
  }
  convertStatusToString()
  {
    switch (this.futureData.Status)
     {
      case Statuses.Late: this.ST="1"; 
      break;
      case Statuses.NonPresent: this.ST="2";
        break;
    }
  }
  Back()
  {
    this.rout.navigate(['ChildReport']);
  }
  Exit()
  {
    this.rout.navigate(['']);
  }
}

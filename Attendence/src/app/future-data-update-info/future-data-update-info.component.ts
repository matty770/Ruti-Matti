import { Component, OnInit } from '@angular/core';
import { FutureData } from 'src/app/models/FutureData';
import { FutureDataService } from 'src/app/services/future-data.service';
import { Statuses } from 'src/app/models/LiveData';

@Component({
  selector: 'app-future-data-update-info',
  templateUrl: './future-data-update-info.component.html',
  styleUrls: ['./future-data-update-info.component.css']
})
export class FutureDataUpdateInfoComponent implements OnInit {


  constructor(private futureDataService:FutureDataService) { }
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
    this.futureDataService.updateFutureData(this.futureData)
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
}

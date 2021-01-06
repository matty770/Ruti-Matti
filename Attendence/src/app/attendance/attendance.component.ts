import { Component, OnInit } from '@angular/core';
import {Child}from '../models/Child'
import { LiveData } from '../models/LiveData';
import { KinderGardensService } from '../services/Kindergarden.service';
import { LiveDateService } from '../services/live-date.service';
import { UserService } from '../services/user.service';
import { Statuses } from 'src/app/models/FutureData';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  LiveDataList:LiveData[];
  
  constructor(private kinderGarden:KinderGardensService, private liveDataService:LiveDateService) { }

  selectLiveDataByKinderGardenCode()
  {
    this.liveDataService.GetLiveDate(this.kinderGarden.kinderGardenCode).subscribe(
      data=>{this.LiveDataList = data;
      if(data!=null)
      alert(this.LiveDataList.length);
     }
     )
  }
  ngOnInit() {
   this.selectLiveDataByKinderGardenCode();
  }
  changeStatusToArrived(idChild:string)
  {
    this.liveDataService.ChangeStatus(idChild,Statuses.Present);
  }
 


}

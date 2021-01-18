import { Component, OnInit } from '@angular/core';
import {Child}from '../models/Child'
import { LiveData } from '../models/LiveData';
import { KinderGardensService } from '../services/Kindergarden.service';
import { LiveDateService } from '../services/live-date.service';
import { UserService } from '../services/user.service';
import { Statuses } from 'src/app/models/FutureData';
import { Router } from '@angular/router';
import { KinderGarden } from 'src/app/models/KinderGarden';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  kinderGarden:KinderGarden=this.kinderGardenService.kinderGarden;
  LiveDataList:LiveData[];
  
  constructor(private router:Router, private kinderGardenService:KinderGardensService, private liveDataService:LiveDateService) {
   }

  selectLiveDataByKinderGardenCode()
  {
    this.liveDataService.GetLiveDataByKinderGardenCode(this.kinderGarden.IdKinderGarden).subscribe(
      data=>{
      this.LiveDataList = data;
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
 
  goToTeacherHomePage(){
    this.router.navigate(['/TeacherHomePage']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Child}from '../models/Child'
import { LiveData } from '../models/LiveData';
import { KinderGardensService } from '../services/Kindergarden.service';
import { LiveDateService } from '../services/live-date.service';
import { UserService } from '../services/user.service';
import { Statuses } from 'src/app/models/FutureData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  LiveDataList:LiveData[];
  
  constructor(private router:Router, private kinderGarden:KinderGardensService, private liveDataService:LiveDateService) {
   }

  selectLiveDataByKinderGardenCode()
  {
    this.liveDataService.GetLiveDate(this.kinderGarden.kinderGardenCode).subscribe(
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

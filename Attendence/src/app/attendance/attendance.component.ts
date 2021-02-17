import { Component, OnInit } from '@angular/core';
import {Child}from '../models/Child'
import { LiveData } from '../models/LiveData';
import { KinderGardensService } from '../services/Kindergarden.service';
import { LiveDateService } from '../services/live-date.service';
import { ChildService } from '../services/child.service';
import { Statuses } from 'src/app/models/FutureData';
import { Router } from '@angular/router';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { forEach } from '@angular/router/src/utils/collection';
import { createHostListener } from '@angular/compiler/src/core';
import { Attendance } from 'src/app/models/Attendance';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  kinderGarden:KinderGarden=this.kinderGardenService.kinderGarden;
  LiveDataList:LiveData[];
  childrenList:Child[];
  childernandLiveData:Child[];
  ss:Statuses=Statuses.NonPresent;
  FirstName: string;
  LastName:string;
  pictureBase64: string;
  arr=[];
  listAttendances:Attendance[];
  constructor(private childService:ChildService, private router:Router, private kinderGardenService:KinderGardensService, private liveDataService:LiveDateService) {
   
  }

  selectLiveDataByKinderGardenCode()
  {
    this.liveDataService.GetLiveDataByKinderGardenCode(this.kinderGarden.IdKinderGarden).subscribe(
      data=>{
      this.LiveDataList = data;
     }
     )
  }
  getChildsByKinderGarden()
  {
    this.childService.getChildsByKinderGarden(this.kinderGarden.IdKinderGarden)
    .subscribe( data=>{this.childrenList = data; });
  }
  ngOnInit() {
    this.liveDataService.copyToAttendance(this.kinderGarden.IdKinderGarden).toPromise().then
    (data=>{this.listAttendances=data;alert(this.listAttendances.length);});

  //this.selectLiveDataByKinderGardenCode();
  //this.getChildsByKinderGarden();
  //for (let index = 0; index < this.LiveDataList.length; index++) {
  //  this.childrenList.forEach(element => {
  //    if(this.LiveDataList[index].IdChild==element.Id)
  //    {
  //      this.FirstName=element.FirstName;
  //      this.LastName=element.LastName;
  //      this.pictureBase64=element.pictureBase64;
  //    }
  //  });
  //  this.arr.push({'id':this.LiveDataList[index].IdChild, 'status':this.LiveDataList[index].status,
  // 'alarm':this.LiveDataList[index].alarm,'FirstName':this.FirstName,'LastName':this.LastName,'Picture':this.pictureBase64});
  //}
  }
  
  changeStatusToArrived(idChild:string)
  {
    this.liveDataService.ChangeStatus(idChild,Statuses.Present);
  }
  changeStatusToCconfirm(idChild:string)
  {
    this.liveDataService.ChangeStatus(idChild,Statuses.Confirm);
  }
 
  goToTeacherHomePage(){
    this.router.navigate(['/TeacherHomePage']);
  }
  
}

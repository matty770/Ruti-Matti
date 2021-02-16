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
   this.selectLiveDataByKinderGardenCode();
   this.getChildsByKinderGarden();
   //this.createList();
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

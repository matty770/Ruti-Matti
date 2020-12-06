import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { KinderGarden } from '../models/KinderGarden';
import {KinderGardensService}from '../services/Kindergarden.service'

@Component({
  selector: 'app-teacher-home-page',
  templateUrl: './teacher-home-page.component.html',
  styleUrls: ['./teacher-home-page.component.css']
})
export class TeacherHomePageComponent implements OnInit {
KinderGardens:KinderGarden[];

  constructor(private rout:Router,private KinderGardenService:KinderGardensService) { }

  ngOnInit() {
  }
  goToAttendance(IDKG:string)
  {
    this.rout.navigate(['/attendance',{IDKG}]);
  }
  selectKinderGardensByTeacherId(TeacherId: string)
  {
    alert("bhbhbhb");
    this.KinderGardenService.selectKinderGardensByTeacherId(TeacherId).subscribe(
      data=>{ this.KinderGardens = data;
      if(data!=null)
      alert("bhbhbhb");
     }
     )
    
  }
}

import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import{ManagerService} from '../services/manager.service';


@Component({
  selector: 'app-manager-home-page',
  templateUrl: './manager-home-page.component.html',
  styleUrls: ['./manager-home-page.component.css']
})
export class ManagerHomePageComponent implements OnInit {
  [x: string]: any;
  listKinderGarden:KinderGarden[];
  kindergarden:KinderGarden = new KinderGarden(123,"rrr","1122","0545654362",2020,null,null) ;
  constructor(private managerService:ManagerService) { }
  ngOnInit() {
  }

  GetAllKinderGarden()
  {
    alert("dddd");
    this.managerService.GetAllKinderGarden().subscribe(
      data=>{this.listKinderGarden = data;})
      if(this.listKinderGarden!=null)
      alert("yes");
      else alert("no!!");      
  }
  addKinderGarden()
  {
    this.managerService.addKinderGarden(this.kindergarden);
  }

}

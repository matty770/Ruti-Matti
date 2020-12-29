import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import{ManagerService} from '../services/manager.service';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-home-page',
  templateUrl: './manager-home-page.component.html',
  styleUrls: ['./manager-home-page.component.css']
})
export class ManagerHomePageComponent implements OnInit {
  [x: string]: any;
  //listKinderGarden:KinderGarden[];
  constructor(private managerService:ManagerService,private kinderGardenService:KinderGardensService,
  private router:Router)
   { }
  ngOnInit() {
  }

  GetAllKinderGarden()
  {
    this.managerService.GetAllKinderGarden().subscribe(
      data=>{this.kinderGardenService.ListkinderGarden = data;})
      if(this.kinderGardenService.ListkinderGarden!=null)
      alert("yes");
      else alert("no!!");
    this.router.navigate(['/ListOfKinderGarden']);   
  }
  ToKinderGardenForm()
  {
    this.router.navigate(['formKinderGarden']);
  }

}

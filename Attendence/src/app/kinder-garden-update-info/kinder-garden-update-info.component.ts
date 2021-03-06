import { Component, OnInit } from '@angular/core';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kinder-garden-update-info',
  templateUrl: './kinder-garden-update-info.component.html',
  styleUrls: ['./kinder-garden-update-info.component.css']
})
export class KinderGardenUpdateInfoComponent implements OnInit {

  constructor(private kinderGardenService:KinderGardensService,private router:Router) { }
  kinderGarden:KinderGarden=this.kinderGardenService.kinderGarden;
  ngOnInit() {
  }
  
  UpdateKinderGarden(KinderGardenUpdateForm)
  {
    
   this.kinderGardenService.updateKinderGarden(this.kinderGarden);
  // .subscribe(data=>{this.kinderGarden = data;})
   // alert(this.kinderGarden.Phone);
  }

  Exit()
  {
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-kinder-garden',
  templateUrl: './list-of-kinder-garden.component.html',
  styleUrls: ['./list-of-kinder-garden.component.css']
})
export class ListOfKinderGardenComponent implements OnInit {
listKinderGarden:KinderGarden[];
  constructor(private kinderGardenService:KinderGardensService,private router:Router) { }

  ngOnInit() {
    this.GetAllKinderGarden();
  }
  GetAllKinderGarden()
  {
    this.kinderGardenService.GetAllKinderGarden().subscribe(
      data=>{this.listKinderGarden = data;})
  }
  ToKinderGardenForm()
  {
    this.router.navigate(['formKinderGarden']);
  }
  goToDetails(kinderGarden:KinderGarden)
  {
    this.kinderGardenService.kinderGarden=kinderGarden;
    this.router.navigate(['KinderGardenUpdateInfo']);
  }
  goToChildrenForKinderGarden(kinderGarden:KinderGarden)
  {
    this.kinderGardenService.kinderGarden=kinderGarden;
    this.router.navigate(['ChildrenForKinderGarden']);
  }

  RemoveKinderGarden(IdKinderGarden:number)
  {
   this.kinderGardenService.RemoveKinderGarden(IdKinderGarden);
  }
}

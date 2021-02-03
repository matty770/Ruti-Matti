import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-list-of-kinder-garden',
  templateUrl: './list-of-kinder-garden.component.html',
  styleUrls: ['./list-of-kinder-garden.component.css']
})
export class ListOfKinderGardenComponent implements OnInit {
listKinderGarden:KinderGarden[];
add:number=0;
select:string="";
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
    this.add=1;
    //window.location.reload();
    //this.GetAllKinderGarden();
    //this.router.navigate(['formKinderGarden']);
  }
  goToDetails(kinderGarden:KinderGarden)
  {
    this.kinderGardenService.kinderGarden=kinderGarden;
    this.router.navigate(['KinderGardenUpdateInfo',"ListOfKinderGarden"]);
  }
  goToChildrenForKinderGarden(kinderGarden:KinderGarden)
  {
    localStorage.setItem("Router","/ListOfKinderGarden");
    this.kinderGardenService.kinderGarden=kinderGarden;
    this.router.navigate(['ChildrenForKinderGarden']);
  }
  cancelAdd()
{
  this.add=0;
  this.GetAllKinderGarden();
}
  RemoveKinderGarden(IdKinderGarden:number)
  {
   this.kinderGardenService.RemoveKinderGarden(IdKinderGarden);
  }
}

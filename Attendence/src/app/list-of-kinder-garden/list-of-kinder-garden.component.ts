import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

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
    alert("ss");
    this.kinderGardenService.GetAllKinderGarden().subscribe(
      data=>{this.kinderGardenService.ListkinderGarden = data;})
      if(this.kinderGardenService.ListkinderGarden!=null)
      alert("yes");
      else alert("no!!");   
  }
  ToKinderGardenForm()
  {
    this.router.navigate(['formKinderGarden']);
  }
}

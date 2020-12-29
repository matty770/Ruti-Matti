import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list-of-kinder-garden',
  templateUrl: './list-of-kinder-garden.component.html',
  styleUrls: ['./list-of-kinder-garden.component.css']
})
export class ListOfKinderGardenComponent implements OnInit {
listKinderGarden:KinderGarden[];
  constructor(private kinderGardenService:KinderGardensService) { }

  ngOnInit() {
    
  }
  hhhh()
  {
    
    alert(this.listKinderGarden);
    //this.listKinderGarden=this.kinderGardenService.ListkinderGarden;
   // alert(this.listKinderGarden);
  }

}

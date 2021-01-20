import { Component, OnInit } from '@angular/core';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { KinderGarden } from 'src/app/models/KinderGarden';

@Component({
  selector: 'app-form-kinder-garden',
  templateUrl: './form-kinder-garden.component.html',
  styleUrls: ['./form-kinder-garden.component.css']
})
export class FormKinderGardenComponent implements OnInit {

  kinderGarden:KinderGarden=new KinderGarden();
  constructor(private kinderGardenService:KinderGardensService) { }

  ngOnInit() {
  }
  addKinderGarden(kinderGardenForm)
  {
   // alert(this.kinderGarden.idKinderGarden);
   this.kinderGarden.Active=1;
    this.kinderGardenService.addKinderGarden(this.kinderGarden);
    kinderGardenForm.reset();
  }

}

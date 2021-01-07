import { Component, OnInit } from '@angular/core';
import { FutureData } from '../models/FutureData';
import { FutureDataService } from '../services/future-data.service';

@Component({
  selector: 'app-form-future-data',
  templateUrl: './form-future-data.component.html',
  styleUrls: ['./form-future-data.component.css']
})
export class FormFutureDataComponent implements OnInit {
futureData:FutureData;
  constructor(private futureDataService:FutureDataService) { }

  ngOnInit() {
  }
  addFutureData(FutureDataForm)
  {
    this.futureData.IdChild=this.futureDataService.FD.IdChild;
    this.futureData.KinderGardenCode=this.futureDataService.FD.KinderGardenCode;
   // alert(this.kinderGarden.idKinderGarden);
    this.futureDataService.addFutureData(this.futureData);
    FutureDataForm.reset();
  }
}

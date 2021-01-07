import { Component, OnInit } from '@angular/core';
import { FutureDataService } from 'src/app/services/future-data.service';

@Component({
  selector: 'app-child-report',
  templateUrl: './child-report.component.html',
  styleUrls: ['./child-report.component.css']
})
export class ChildReportComponent implements OnInit {

  constructor(private futureDataService:FutureDataService) { }

  ngOnInit() {
    this.GetFutureData();
  }
  GetFutureData()
  {
    
    return this.futureDataService.GetFutureData(this.futureDataService.futureData.IdChild);
  }

}

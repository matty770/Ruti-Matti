import { DatePipe } from '@angular/common';
import { toDate } from '@angular/common/src/i18n/format_date';
import { Component, OnInit } from '@angular/core';
import { FutureData, Statuses } from '../models/FutureData';
import { FutureDataService } from '../services/future-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-future-data',
  templateUrl: './form-future-data.component.html',
  styleUrls: ['./form-future-data.component.css']
})
export class FormFutureDataComponent implements OnInit {
 futureData:FutureData=new FutureData();
 ST:string;
 now:DatePipe;
 idChild:string=this.futureDataService.futureData.IdChild;
 select:string="";
 days:number;
  d:Date=new Date()
  date2:Date = new Date();
  constructor(private futureDataService:FutureDataService, private router:Router) { }

  ngOnInit() {
  }
  addFutureData(FutureDataForm:NgForm)
  {
    if(!FutureDataForm.valid){
      (<any>Object).keys( FutureDataForm.controls).forEach(key => {
        FutureDataForm.controls[key].markAsDirty();
      });
    return;
  }
    this.futureData.IdChild=this.idChild;
    this.futureData.KinderGardenCode=this.futureDataService.futureData.KinderGardenCode;
    switch(this.ST)
    {
    case "1": this.futureData.Status=Statuses.Late; break;
    case "2": this.futureData.Status=Statuses.Absent;
    };
 // var date1 = new Date(); 
   //var date2 = new Date("07/30/2019"); 
   //var Difference_In_Time = date2.getTime() - date1.getTime(); 
   //var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    //alert(Difference_In_Days);
    this.futureData.UpdateDate=(new Date());
   // var dat1=new Date(this.futureData.Date);
    //var dat2=new Date(this.date2);
   // this.days=this.futureData.Date.getTime()-this.date2.getTime();
    //alert(this.days);
  //  var i=0;
  //  do
  // {
    //this.futureData.Date.setDate(this.futureData.Date.getDate()-this.days-i);
    this.futureDataService.addFutureData(this.futureData).toPromise().then((res) =>
    {this.router.navigate(['/ChildReport'])},error=>{alert("ארע תקלה בהכנסת הנתונים")});
  }
  GoBack()
  {
    this.router.navigate(['/ChildReport']);
  }
}

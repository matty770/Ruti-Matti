import { Component, OnInit } from '@angular/core';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { KinderGarden } from 'src/app/models/KinderGarden';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-kinder-garden',
  templateUrl: './form-kinder-garden.component.html',
  styleUrls: ['./form-kinder-garden.component.css']
})
export class FormKinderGardenComponent implements OnInit {
  select:string="";
  kinderGarden:KinderGarden=new KinderGarden();
  constructor(private kinderGardenService:KinderGardensService, private router:Router) { }

  ngOnInit() {
  }
  addKinderGarden(kinderGardenForm)
  {
   // alert(this.kinderGarden.idKinderGarden);
   this.kinderGarden.Active=1;
    this.kinderGardenService.addKinderGarden(this.kinderGarden).toPromise().then((res) =>{
    this.router.navigate(['/ListOfKinderGarden']); 
    },error=>{alert("ארע שגיאה בכנסת הנתונים")});
  }

}

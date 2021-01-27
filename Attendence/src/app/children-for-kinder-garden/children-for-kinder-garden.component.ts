import { Component, OnInit } from '@angular/core';
import { KinderGardensService } from 'src/app/services/Kindergarden.service';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/Child.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children-for-kinder-garden',
  templateUrl: './children-for-kinder-garden.component.html',
  styleUrls: ['./children-for-kinder-garden.component.css']
})
export class ChildrenForKinderGardenComponent implements OnInit {

  children:Child[];
  constructor(private kinderGardenService:KinderGardensService,
    private childService:ChildService,private router:Router) { }

  ngOnInit() {
    this.getChildsByKinderGarden();
  }

  getChildsByKinderGarden()
  {
    this.childService.getChildsByKinderGarden(this.kinderGardenService.kinderGarden.IdKinderGarden)
    .subscribe( data=>{this.children = data; });
  }
  GoBack()
  {
    this.router.navigate(['ListOfKinderGarden']);
  }
  Exit()
  {
    this.router.navigate(['']);
  }
}

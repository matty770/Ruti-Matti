import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-children-of-parent',
  templateUrl: './children-of-parent.component.html',
  styleUrls: ['./children-of-parent.component.css']
})
export class ChildrenOfParentComponent implements OnInit {
  subscription: Subscription;

  constructor(private rout:Router) { }
  goToReport()
  {   
    this.rout.navigate(['/ChildReport']);
  }
  goToDetails()
  {
    this.rout.navigate(['/ChildUpdateInpo']);
  }

  ngOnInit() {
   
  }

}

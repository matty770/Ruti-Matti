import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-children-of-parent',
  templateUrl: './children-of-parent.component.html',
  styleUrls: ['./children-of-parent.component.css']
})
export class ChildrenOfParentComponent implements OnInit {

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

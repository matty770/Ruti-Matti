import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/Child.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-children',
  templateUrl: './list-of-children.component.html',
  styleUrls: ['./list-of-children.component.css']
})
export class ListOfChildrenComponent implements OnInit {
listChildren:Child[];

  constructor(private childServive:ChildService,private router:Router) { }
  search="";
  ngOnInit() {
    this.GetAllChildrens();
  }

  GetAllChildrens()
  {   
    this.childServive.getAllChildrens().subscribe(
      data=>{this.listChildren = data;})      
  }
  ToChildrenForm()
  {
    this.router.navigate(['formChildren']);
  }
  removeChild(child:Child)
  {
   this.childServive.removeChild(child);
  }
}

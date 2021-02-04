import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/Child.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list-of-children',
  templateUrl: './list-of-children.component.html',
  styleUrls: ['./list-of-children.component.css']
})
export class ListOfChildrenComponent implements OnInit {
listChildren:Child[];
bool:boolean=null;
select:string;
  constructor(private childServive:ChildService,private router:Router) { 
    this.select="";
  }
  
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
  changeToNotActive(childId:string)
  {
   if(confirm("הנך בטוח שאתה רוצה להפוך ילד זה ללא פעיל?")==true)
   {
     this.childServive.changeToNotActive(childId).toPromise().then(data=>{this.bool=data});
     if(this.bool==true)
     {
       alert("הפעולה בוצעה בהצלחה");
     }
     else alert(this.bool);
   } 
   
  }
}

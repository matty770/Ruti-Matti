import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'secretary-menu',
  templateUrl: './secretary-menu.component.html',
  styleUrls: ['./secretary-menu.component.css']
})
export class SecretaryMenuComponent implements OnInit {
  boolHome:boolean=false;
  boolAddTeacher:boolean=false;
  boolAddClass:boolean=false;
  seretaryStudent:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  myStyle :any= {
   
    
     backgroundColor :"orange"
   

  
  }
 
}

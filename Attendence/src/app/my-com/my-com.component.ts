import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css']
})
export class MyComComponent implements OnInit {

 
  constructor() { }
  showIf: boolean = false;
  chooseClass= true;

  ngOnInit() {

  }
  onselect(hero) {
    alert(hero.name);
    let i = 45;
  }
  calc(){
    this.chooseClass  = (!this.chooseClass);
  }
  calcClasses(){
    return { 
      'myClass': this.chooseClass, 
      'myOtherClass': !this.chooseClass
    };
  }
 
  heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' }
  ];

}

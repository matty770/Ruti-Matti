import { Component, OnInit,Input} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() messegeTeacher:string;
@Input() messegeStudent:string;
@Input() messegeClass:number;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Child}from '../models/Child'
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  children:Child[];
  
  constructor() { }

  ngOnInit() {
  }


}

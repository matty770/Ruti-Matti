import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/Child';
@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css']
})
export class FormChildrenComponent implements OnInit {
child:Child=new Child();
  constructor(private childrenService:ChildService) { }

  ngOnInit() {
  }

  addChildren(ChildrenForm)
  {
    this.childrenService.addChildren(this.child);
    ChildrenForm.reset();
   
  }
}

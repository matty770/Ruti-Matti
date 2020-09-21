import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testClient';
  constructor(private dataS: DataService) {

    this.dataS.getData("user", { userName: "1" }).subscribe(res => {
      alert(res);
    });

  }
}

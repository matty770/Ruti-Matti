import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { KinderGarden } from 'src/app/models/kindergarden';
@Injectable({
  providedIn: 'root'
})
export class KinderGardensService {

  constructor(private http:DataService,private userService:UserService) {}

  selectKinderGardensByTeacherId(TeacherId:string): Observable <KinderGarden[]> {
    return this.http.Get('KinderGarden?TeacherId=' + TeacherId);}
}

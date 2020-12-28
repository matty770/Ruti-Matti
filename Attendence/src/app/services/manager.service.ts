import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { KinderGarden } from 'src/app/models/KinderGarden';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: DataService) { }

 // GetUser(userId: string): Observable<User> {
   // return this.http.Get('User?userId=' + userId);
 // }
  GetAllKinderGarden(): Observable<KinderGarden[]>
  {
    return this.http.Get('KinderGarden');
  }
  addKinderGarden(kinderGarden:KinderGarden)
  {
    this.http.post('KinderGarden',kinderGarden)
    .subscribe(res=>{ console.log(res)});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { DataService } from 'src/app/services/data.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: DataService
  ) { }
  GetUser(userId: string): Observable<User> {
    return this.http.Get('User?userId=' + userId);
  }
}
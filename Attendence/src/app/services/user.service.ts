import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:52490/api/User"
  constructor(private http:HttpClient) { }
  GetUser(userId:string): Observable<User>
  {
  return this.http.get<User>(this.baseUrl + 'GetUser');
  }
}

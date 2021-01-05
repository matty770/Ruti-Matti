import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:52490/api/"
  constructor(private http: HttpClient) { }
  Get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url);
  }
  post(url: string, data: any): Observable<any> {
    alert(data);
    return this.http.post(this.baseUrl + url, data);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = "http://localhost:52490/api/";
  
  constructor(private HttpClient: HttpClient) { }

  getData(controller, prms) {
    var urlParameters:HttpParams = null;
    if(prms != null){
      urlParameters = new HttpParams();

      for (const key in prms) {
        if (prms.hasOwnProperty(key)) {
          urlParameters = urlParameters.set(key, prms[key])
          const element = prms[key];
          
        }
      }
    }
  var promis=  this.HttpClient.get(this.baseURL + controller, { params:urlParameters})
   // .subscribe(res=>{

    //})
    return promis;
  }

}

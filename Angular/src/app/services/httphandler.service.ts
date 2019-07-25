import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {

  constructor(private http: HttpClient) { }

  post(url, data){
    console.log("POST: "+url)
    return new Promise( ( resolve, reject ) => {
      this.http.post(url, data, {responseType: 'json'}).subscribe(res => {
        console.log(res)
        resolve(res)
      })
    })
  }

  get(url){
    return new Promise( ( resolve, reject ) => {
      this.http.get(url, {responseType: 'json'}).subscribe(res => {
        console.log(res)
        resolve(res)
      })
    })
  }
}

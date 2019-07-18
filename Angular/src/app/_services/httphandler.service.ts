import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {

  constructor(private http: HttpClient) { }

  post(url, data){
    return new Promise( ( resolve ) => {
      this.http.post(url, data, {responseType: 'json'}).subscribe(res => {
        resolve(res)
      })
    })
  }

  get(url){
    return new Promise( ( resolve ) => {
      this.http.get(url, {responseType: 'json'}).subscribe(res => {
        resolve(res)
      })
    })
  }
}

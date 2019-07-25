import { Injectable } from '@angular/core';
import axios from "axios";


@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {
  headers = { "Content-Type": "application/json" };
  axiosRequest: any;

  constructor() { }

  request(url, params, type){
    switch(type.toLowerCase()){
      case "get": this.axiosRequest = axios.get(url, {params: params, headers: this.headers}); break;
      case "post": this.axiosRequest = axios.post(url, params, {headers: this.headers}); break;
      case "delete": this.axiosRequest = axios.delete(url, {data: params, headers: this.headers}); break;
      case "put": this.axiosRequest = axios.put(url, params, {headers: this.headers}); break;
    }
    return this.axiosRequest.then(
      function (response) {
        return response.data;
      })
      .catch(
      function (error) {
        return {
          error: error.response.data.Message,
          statusCode: error.response.statusCode
        }
      })
  }
}

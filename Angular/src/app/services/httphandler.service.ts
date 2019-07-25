import { Injectable } from '@angular/core';
import axios from "axios";


@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {
  headers = { "Content-Type": "application/json" };

  constructor() { }

  getData(url, params){
    return axios.get(url, { params: params, headers: this.headers })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return {
          error: error.response.data.Message,
          statusCode: error.response.statusCode
        };
    });
  }

  postData(url, params){
    return axios.post(url, params, { headers: this.headers })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return {
          error: error.response.data.Message,
          statusCode: error.response.statusCode
        };
      });
  }

  deleteData(url, data){
    return axios.delete(url, { data: data, headers: this.headers })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return {
          error: error.response.data.Message,
          statusCode: error.response.statusCode
        };
    });
  }

  putData(url, params){
    return axios.put(url, params, { headers: this.headers })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return {
          error: error.response.data.Message,
          statusCode: error.response.statusCode
        };
      });
  }
}

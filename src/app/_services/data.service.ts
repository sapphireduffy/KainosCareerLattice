import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable()
export class DataService {
  headers: any;
  private roleUrl = "/api/roles";

  constructor() {}

  getHeaders() {
    return (this.headers = {
      "Content-Type": "application/json"
    });
  }

  getRoleByDepartment(departmentID: number) {
    return axios
      .get(this.roleUrl, {
        params: {
          departmentID: departmentID
        },
        headers: this.getHeaders()
      })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        if (error.response) {
          return {
            error: error.response.data.Message,
            statusCode: error.response.statusCode
          };
        } else {
          if (error.message) {
            return { error: error.message };
          }
        }
      });
  }
}

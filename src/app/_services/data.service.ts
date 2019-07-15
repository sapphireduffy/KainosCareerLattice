import { Injectable } from "@angular/core";
import axios from "axios";
//Code by Megan O'Kane
@Injectable()
export class DealService {
  headers: any;
  private roleUrl = "/api/roles";

  constructor() {}

  getHeaders() {
    return (this.headers = {
      "Content-Type": "application/json"
    });
  }

  //get all deals, passes in business id of deals to get
  getRoleByDepartment(departmentID: number) {
    return axios
      .get(this.roleUrl, {
        params: {
          departmentID: departmentID
        },
        headers: this.getHeaders()
      })
      .then(function(response) {
        return response;
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

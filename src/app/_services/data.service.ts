import { Injectable } from "@angular/core";
import axios from "axios";

const departmentUrl = "/api/departments";
const capabilityUrl = "/api/capabilities";
const getAllDataUrl = "/api/allData";
const getRolesInDepartmentByBandURL = '/api/rolesInDepByBand';

@Injectable()
export class DataService {
  headers: any;

  constructor() {}

  getHeaders() {
    return (this.headers = {
      "Content-Type": "application/json"
    });
  }

  getDepartmentDetails(departmentID: number) {
    return axios
      .get(departmentUrl, {
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

  getCapabilityNamesByDepartment(departmentID: number) {
    return axios
      .get(capabilityUrl, {
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

  

  getAllData(departmentID: number) {
    return axios
      .get(getAllDataUrl, {
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

  getRolesInDepartmentByBand(departmentID: number, bandID: number) {
    return axios
      .get(getRolesInDepartmentByBandURL, {
        params: {
          departmentID: departmentID,
          bandID: bandID
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

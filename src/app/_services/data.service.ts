import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable()
export class DataService {
  headers: any;
  private roleUrl = "/api/roles";
  private departmentUrl = "/api/departments";
  private capabilityUrl = "/api/capabilities";
  private role_capabilityUrl = "/api/role_capability";
  private getAllDataUrl = "/api/allData"

  constructor() {}

  getHeaders() {
    return (this.headers = {
      "Content-Type": "application/json"
    });
  }

  getDepartmentDetails(departmentID: number) {
    return axios
      .get(this.departmentUrl, {
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

  getCapabilityNamesByDepartment(departmentID: number) {
    return axios
      .get(this.capabilityUrl, {
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

  getRoleByCapability(departmentID: number) {
    return axios
      .get(this.role_capabilityUrl, {
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
      .get(this.getAllDataUrl, {
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

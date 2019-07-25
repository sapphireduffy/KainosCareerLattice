import { Injectable } from "@angular/core";
import axios from "axios";

const departmentUrl = "/api/departments";
const capabilityUrl = "/api/capabilities";
const getRolesInDepartmentURL = "/api/rolesInDep";
const getBandsURL = "/api/bands";
const addRoleUrl = "/api/addRole";
const editRoleUrl = "/api/editRole";
const getRoleUrl = "/api/getRole";
const addCapabilityURL = "/api/addcapability";
const getUniqueBandURL = "/api/uniqueband";
const getRoleBandCapabilityExistsUrl = "/api/roleBandCapabilityExists";
const deleteRoleURL = "/api/deleteRole";

@Injectable()
export class DataService {
  headers: any;
  public isAdmin: boolean

  constructor() { }

  getHeaders() {
    return (this.headers = {
      "Content-Type": "application/json"
    });
  }

  deleteRole(roleId: any) {
    return axios
      .delete(deleteRoleURL, { 
        data:{roleId:roleId},
        headers: this.getHeaders() })
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

  getDepartmentDetails(departmentID: number) {
    return axios
      .get(departmentUrl, {
        params: {
          departmentID: departmentID
        },
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  getRolesInDepartment(departmentID: number) {
    return axios
      .get(getRolesInDepartmentURL, {
        params: {
          departmentID: departmentID
        },
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  getBands() {
    return axios
      .get(getBandsURL, {
        params: {},
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  getBandInformation(bandId: number) {
    return axios
      .get(getUniqueBandURL, {
        params: {
          bandId: bandId
        },
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  createCapability(param: any) {
    return axios
      .post(addCapabilityURL, param, { headers: this.getHeaders() })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
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

  editRole(param: any) {
    return axios
      .put(editRoleUrl, param, { headers: this.getHeaders() })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
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

  getRole(roleID: number) {
    return axios
      .get(getRoleUrl, {
        params: {
          roleID: roleID
        },
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  getRoleBandCapabilityExists(capabilityId: number, bandId: number) {
    return axios
      .get(getRoleBandCapabilityExistsUrl, {
        params: {
          capabilityId: capabilityId,
          bandId: bandId
        },
        headers: this.getHeaders()
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
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

  createRole(param: any) {
    return axios
      .post(addRoleUrl, param, { headers: this.getHeaders() })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return { error: error.message };
      });
  }
}
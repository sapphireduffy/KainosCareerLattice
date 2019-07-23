import { Injectable } from "@angular/core";
import axios from "axios";

const departmentUrl = "/api/departments";
const capabilityUrl = "/api/capabilities";
const getCapabilityNameUrl = "/api/capabilityName";
const getAllDataUrl = "/api/allData";
const getRolesInDepartmentURL = "/api/rolesInDep";
const getBandsURL = "/api/bands";
const getBandsNameURL = "/api/bandName";
const roleUrl = "/api/role";
const addRoleUrl = "/api/addrole";
const editRoleUrl = "/api/editrole";
const viewEditRoleUrl = "/api/viewEditRole";
const getUniqueBandURL = "/api/uniqueband";

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

  getCapabilityNameById(capabilityId: number) {
    return axios
      .get(getCapabilityNameUrl, {
        params: {
          capabilityId: capabilityId
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

  getRolesInDepartment(departmentID: number) {
    return axios
      .get(getRolesInDepartmentURL, {
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

  getBands() {
    return axios
      .get(getBandsURL, {
        params: {},
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

  getBandNameById(bandId: number) {
    return axios
      .get(getBandsNameURL, {
        params: {
          bandId: bandId
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

  getRoleInformation(roleID: number) {
    return axios
      .get(roleUrl, {
        params: {
          roleID: roleID
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

  getBandInformation(bandId: number) {
    return axios
      .get(getUniqueBandURL, {
        params: {
          bandId: bandId
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

  createRole(param: any) {
    return axios
      .post(addRoleUrl, param, { headers: this.getHeaders() })
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

  editRole(param: any) {
    return axios
      .put(editRoleUrl, param, { headers: this.getHeaders() })
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

  getEditRole(roleID: number) {
    return axios
      .get(viewEditRoleUrl, {
        params: {
          roleID: roleID
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

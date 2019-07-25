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
    return (this.headers = { "Content-Type": "application/json" });
  }

  getData(url, params){
    return axios.get(url, { params: params, headers: this.getHeaders() })
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
    return axios.post(url, params, { headers: this.getHeaders() })
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
    return axios.delete(url, { data: data, headers: this.getHeaders() })
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
    return axios.put(url, params, { headers: this.getHeaders() })
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

  deleteRole(roleId: any) {
    return this.deleteData(deleteRoleURL,{roleId:roleId})
  }

  getDepartmentDetails(departmentID: number) {
    return this.getData(departmentUrl, { departmentID: departmentID })
  }

  getCapabilityNamesByDepartment(departmentID: number) {
    return this.getData(capabilityUrl, { departmentID: departmentID })
  }

  getRolesInDepartment(departmentID: number) {
    return this.getData(getRolesInDepartmentURL,{ departmentID: departmentID })
  }

  getBands() {
    return this.getData(getBandsURL, {})
  }

  getBandInformation(bandId: number) {
    return this.getData(getUniqueBandURL, { bandId: bandId })
  }

  createCapability(param: any) {
    return this.postData(addCapabilityURL, param)
  }

  editRole(param: any) {
    return this.putData(editRoleUrl, param)
  }

  getRole(roleID: number) {
    return this.getData(getRoleUrl, { roleID: roleID })
  }

  getRoleBandCapabilityExists(capabilityId: number, bandId: number) {
    return this.getData(getRoleBandCapabilityExistsUrl, { capabilityId: capabilityId, bandId: bandId })
  }

  createRole(param: any) {
    return this.postData(addRoleUrl, param)
  }
}
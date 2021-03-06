import { Injectable } from "@angular/core";
import { HttphandlerService } from './httphandler.service';

const departmentUrl = "/api/departments";
const allDepartmentsURL = "/api/allDepartments";
const capabilityUrl = "/api/capabilities";
const getCapabilityUrl = "/api/getcapability"
const getEditCapabilityURL = "/api/getEditCapability"
const getRolesInDepartmentURL = "/api/rolesInDep";
const getBandsURL = "/api/bands";
const addRoleUrl = "/api/addRole";
const editRoleUrl = "/api/editRole";
const getRoleUrl = "/api/getRole";
const addCapabilityURL = "/api/addcapability";
const getCapabilityURL = "/api/getCapability";
const editCapabilityUrl = "/api/editCapability";
const getCapabilityExists = "/api/capabilityExists"
const getUniqueBandURL = "/api/uniqueband";
const getRoleBandCapabilityExistsUrl = "/api/roleBandCapabilityExists";
const deleteRoleURL = "/api/deleteRole";
const loginUrl = "/api/login"
const editBandUrl = "/api/editBand";
const addBandURL = "/api/addband"

 
@Injectable()
export class DataService {
  public isAdmin: boolean

  constructor(private httpHandler: HttphandlerService) { }

  deleteRole(roleId: any) {
    return this.httpHandler.request(deleteRoleURL, { roleId: roleId }, "delete")
  }

  getDepartmentDetails(departmentID: number) {
    return this.httpHandler.request(departmentUrl, { departmentID: departmentID }, "get")
  }

  getAllDepartments() {
    return this.httpHandler.request(allDepartmentsURL, {}, "get")
  }

  getCapabilityNamesByDepartment(departmentID: number) {
    return this.httpHandler.request(capabilityUrl, { departmentID: departmentID }, "get")
  }

  getCapabilityDetails(capabilityId: number) {
    return this.httpHandler.request(getCapabilityUrl, { capabilityId: capabilityId }, "get")
  }

  getRolesInDepartment(departmentID: number) {
    return this.httpHandler.request(getRolesInDepartmentURL, { departmentID: departmentID }, "get")
  }

  getBands() {
    return this.httpHandler.request(getBandsURL, {}, "get")
  }

  getBandInformation(bandId: number) {
    return this.httpHandler.request(getUniqueBandURL, { bandId: bandId }, "get")
  }

  createCapability(param: any) {
    return this.httpHandler.request(addCapabilityURL, param, "post")
  }

  getCapability(capabilityID: number) {
    return this.httpHandler.request(getCapabilityURL, { capabilityID: capabilityID }, "get")
  }

  getEditCapability(capabilityID: number) {
    return this.httpHandler.request(getEditCapabilityURL, { capabilityId: capabilityID }, "get")
  }

  editCapability(param: any) {
    return this.httpHandler.request(editCapabilityUrl, param, "put")
  }

  getCapabilityExists(capabilityName: string, departmentID: number) {
    return this.httpHandler.request(getCapabilityExists, { capabilityName: capabilityName, departmentID: departmentID }, "get")
  }


  editRole(param: any) {
    return this.httpHandler.request(editRoleUrl, param, "put")
  }

  getRole(roleID: number) {
    return this.httpHandler.request(getRoleUrl, { roleID: roleID }, "get")
  }

  getRoleBandCapabilityExists(capabilityId: number, bandId: number) {
    return this.httpHandler.request(getRoleBandCapabilityExistsUrl, { capabilityId: capabilityId, bandId: bandId }, "get")
  }

  createRole(param: any) {
    return this.httpHandler.request(addRoleUrl, param, "post")
  }

  login(param: any) {
    return this.httpHandler.request(loginUrl, param, "post")
  }

  editBand(param: any) {
    console.log(param)
    return this.httpHandler.request(editBandUrl, param, "put")
  }

  createBand(param: any) {
    return this.httpHandler.request(addBandURL, param, "post")
  }
}
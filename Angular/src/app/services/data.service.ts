import { Injectable } from "@angular/core";
import { HttphandlerService } from './httphandler.service';

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
const loginUrl = "/api/login"

@Injectable()
export class DataService {
  public isAdmin: boolean

  constructor(private httpHandler : HttphandlerService) { }

  deleteRole(roleId: any) {
    return this.httpHandler.deleteData(deleteRoleURL,{roleId:roleId})
  }

  getDepartmentDetails(departmentID: number) {
    return this.httpHandler.getData(departmentUrl, { departmentID: departmentID })
  }

  getCapabilityNamesByDepartment(departmentID: number) {
    return this.httpHandler.getData(capabilityUrl, { departmentID: departmentID })
  }

  getRolesInDepartment(departmentID: number) {
    return this.httpHandler.getData(getRolesInDepartmentURL,{ departmentID: departmentID })
  }

  getBands() {
    return this.httpHandler.getData(getBandsURL, {})
  }

  getBandInformation(bandId: number) {
    return this.httpHandler.getData(getUniqueBandURL, { bandId: bandId })
  }

  createCapability(param: any) {
    return this.httpHandler.postData(addCapabilityURL, param)
  }

  editRole(param: any) {
    return this.httpHandler.putData(editRoleUrl, param)
  }

  getRole(roleID: number) {
    return this.httpHandler.getData(getRoleUrl, { roleID: roleID })
  }

  getRoleBandCapabilityExists(capabilityId: number, bandId: number) {
    return this.httpHandler.getData(getRoleBandCapabilityExistsUrl, { capabilityId: capabilityId, bandId: bandId })
  }

  createRole(param: any) {
    return this.httpHandler.postData(addRoleUrl, param)
  }

  login(param: any){
    return this.httpHandler.postData(loginUrl, param)
  }
}
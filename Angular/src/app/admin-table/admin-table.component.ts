import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalService } from '../services/modal.service';

interface Role {
  capability_id?: number
  band_id?: number
  RoleName?: string
  role_id?: number
}

@Component({
  selector: "app-edit-roles",
  templateUrl: "./admin-table.component.html",
  styleUrls: ["./admin-table.component.css"]
})
export class AdminTableComponent implements OnInit {
  departmentName: string;
  departments: [];
  capabilities = [];
  jobsInDep:  Role[];
  bands: [];
  departmentId: number;
  alertMessage: string;
  alertType: string;
  showAlert = false;

  constructor(
    private dataService: DataService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    var urlParams = new URLSearchParams(window.location.search);
    this.departmentId = parseInt(urlParams.get("id"));
    this.loadRoles();
  }

  async switchModal(selectedRole): Promise<void> {
    if(selectedRole.ID === -1){
      this.openAddModal(selectedRole.BandId, selectedRole.CapabilityId, this.departmentId)
    }
    else {
      this.openEditModal(selectedRole.ID, this.capabilities, this.bands);
    }
  }

  roleExists(cap, band) {
    for (var i = 0; i < this.jobsInDep.length; i++) {
      if (this.jobsInDep[i].capability_id == cap.capability_id && this.jobsInDep[i].band_id == band.band_id) {
        return { "Role": this.jobsInDep[i].RoleName, "ID": this.jobsInDep[i].role_id }
      }
    }
    return { "Role": "+", "ID": -1, "BandId": band.band_id, "CapabilityId": cap.capability_id }
  }

  openAddModal(bandId, capabilityId, departmentId){
    this.modalService.openAddRoleModal(bandId, capabilityId, departmentId).then(data => {
      this.displayAlert(data)
    })
  }

  openCapabilityModal(){
    this.modalService.openAddCapabilityModal(this.departmentId).then(data => {
      this.displayAlert(data)
    });
  }

  openEditModal(roleId, capabilities, bands){
    this.modalService.openEditRoleModal(roleId, capabilities, bands).then(data => {
      this.displayAlert(data)
    });
  }

  openAddBandModal(aboveValue, belowValue, schoolId) {
    this.modalService.openAddBandModal(this.departmentId, aboveValue, belowValue, schoolId).then(data => {
      this.displayAlert(data);
    })
  }

  loadRoles(){
    this.dataService.getCapabilityNamesByDepartment(this.departmentId).then(response => {
      this.capabilities = response;
    });

    this.dataService.getRolesInDepartment(this.departmentId).then(response => {
      this.jobsInDep = response;
    });

    this.dataService.getBands().then(response => {
      this.bands = response;
    });

    this.dataService.getDepartmentDetails(this.departmentId).then(response => {
      this.departmentName = response;
    });

    this.dataService.getAllDepartments().then(response => {
      this.departments = response;
      console.log(this.departments);
    })
  }

  displayAlert(data){
    if(data.hasOwnProperty('success')){
      this.alertMessage = data.success;
      this.alertType = "success";
    } else {
      this.alertMessage = data.error;
      this.alertType = "danger";
    }
    this.showAlert = true;
    this.loadRoles();
  }
}

import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { ModalService } from '../modal.service';

@Component({
  selector: "app-edit-roles",
  templateUrl: "./admin-table.component.html",
  styleUrls: ["./admin-table.component.css"]
})
export class AdminTableComponent implements OnInit {
  departmentName: any;
  capabilities = [];
  jobsInDep: any;
  bands: any;
  id: any;
  alertMessage: string;
  alertType: string;
  showAlert = false;
  departmentId: any;

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    var urlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(urlParams.get("id"));
    this.loadRoles();
  }

  roleExists(cap, band) {
    for (var i = 0; i < this.jobsInDep.length; i++) {
      if (this.jobsInDep[i].capability_id == cap.capability_id && this.jobsInDep[i].band_id == band.band_id) {
        return { "Role": this.jobsInDep[i].RoleName, "ID": this.jobsInDep[i].role_id }
      }
    }
    return { "Role": "+", "ID": -1, "BandId": band.band_id, "CapabilityId": cap.capability_id }
  }

  async switchModal(selectedRole) {
    if(selectedRole.ID == -1){
      this.modalService.openAddRoleModal(selectedRole.BandId, selectedRole.CapabilityId, this.departmentId).then(data => {
        this.displayAlert(data)
      })
    }
    else {
      this.openEditModal(selectedRole.ID, this.capabilities, this.bands);
    }
  }

  openEditModal(roleId, capabilities, bands){
    this.modalService.openEditRoleModal(roleId, capabilities, bands).then(data => {
      this.displayAlert(data)
    });
  }

  loadRoles(){
    console.log(this.id)
    this.dataService.getCapabilityNamesByDepartment(this.id).then(response => {
      this.capabilities = response;
    });
    this.dataService.getRolesInDepartment(this.id).then(response => {
      this.jobsInDep = response;
    });
    this.dataService.getBands().then(response => {
      this.bands = response;
    });
    this.dataService.getDepartmentDetails(this.id).then(response => {
      this.departmentName = response;
    });
  }

  displayAlert(data){
    if(data.hasOwnProperty('success')){
      this.showAlert = true;
      this.alertMessage = data.success;
      this.alertType = "success";
    } else {
      this.showAlert = true;
      this.alertMessage = data.error;
      this.alertType = "danger";
    }
    this.loadRoles();
  }
}

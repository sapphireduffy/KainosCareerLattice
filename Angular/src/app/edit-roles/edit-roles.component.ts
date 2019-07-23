import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleInformationComponent } from "../role-information/role-information.component";
import { BandInformationComponent } from '../band-information/band-information.component';
import { AddRoleModalComponent } from '../add-role-modal/add-role-modal.component';
import { Router } from '@angular/router';
import { AddCapabilityComponent } from '../add-capability/add-capability.component';
import { ModalService } from '../modal.service';

@Component({
  selector: "app-edit-roles",
  templateUrl: "./edit-roles.component.html",
  styleUrls: ["./edit-roles.component.css"]
})
export class EditRolesComponent implements OnInit {
  departmentName: any;
  capabilities = [];
  jobsInDep: any;
  bands: any;
  departmentId:any;
  alertMessage:string;
  alertType:string;
  showAlert;

  constructor(
    private dataService: DataService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.showAlert = false;
    var urlParams = new URLSearchParams(window.location.search);
    this.departmentId = parseInt(urlParams.get("id"));
    this.loadRoles();
  }

  roleExists(cap, band){
    for(var i = 0; i < this.jobsInDep.length; i++){
      if(this.jobsInDep[i].capability_id == cap.capability_id && this.jobsInDep[i].band_id == band.band_id){
        return {"Role":this.jobsInDep[i].RoleName, "ID":this.jobsInDep[i].role_id}
      }
    }
    return {"Role":"Add new role", "ID":-1, "BandId":band.band_id, "CapabilityId": cap.capability_id}
  }

  async switchModal(selectedRole) {
    if(selectedRole.ID == -1){
      this.modalService.openAddRoleModal(selectedRole.BandId, selectedRole.CapabilityId, this.departmentId).then(data => {
        this.displayAlert(data)
      })
    }
    else if (selectedRole == 'addCapability') {
      this.modalService.openAddCapabilityModal(this.departmentId);
    }
    else {
      this.modalService.openRoleInfoModal(selectedRole.ID);
    }
  }

  /*async openRoleInfoModal(selectedRoleId){
    await this.dataService.getRoleInformation(selectedRoleId).then(response => {
      const modalRef = this.modalService.openRoleInfoModal(selected)
      modalRef.componentInstance.roleToDisplay = response[0];
    });
  }*/

  /*async openBandInfoModal(selectedBandId) {
    await this.dataService.getBandInformation(selectedBandId).then(response => {
      const modalRef = this.modalService.open(BandInformationComponent);
      modalRef.componentInstance.bandToDisplay = response[0];
    });
  }*/

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
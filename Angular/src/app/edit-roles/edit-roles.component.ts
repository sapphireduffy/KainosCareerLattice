import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleInformationComponent } from "../role-information/role-information.component";
import { BandInformationComponent } from '../band-information/band-information.component';
import { AddRoleModalComponent } from '../add-role-modal/add-role-modal.component';

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
  id:any;

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    var urlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(urlParams.get("id"));
    console.log(this.id)

    this.dataService.getCapabilityNamesByDepartment(this.id).then(response => {
      console.log(response)
      this.capabilities = response;
    });

    this.dataService.getRolesInDepartment(this.id).then(response => {
      console.log(response)
      this.jobsInDep = response;
    });

    this.dataService.getBands().then(response => {
      console.log(response)
      this.bands = response;
    });

    this.dataService.getDepartmentDetails(this.id).then(response => {
      console.log(response)
      this.departmentName = response;
    });
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
      this.openAddRoleModal(selectedRole.BandId, selectedRole.CapabilityId);
    }else{
      this.openRoleInfoModal(selectedRole.ID);
    }
  }

  async openRoleInfoModal(selectedRoleId){
    await this.dataService.getRoleInformation(selectedRoleId).then(response => {
      const modalRef = this.modalService.open(RoleInformationComponent);
      modalRef.componentInstance.roleToDisplay = response[0];
    });
  }

  async openBandInfoModal(selectedBandId) {
    await this.dataService.getBandInformation(selectedBandId).then(response => {
      const modalRef = this.modalService.open(BandInformationComponent);
      modalRef.componentInstance.bandToDisplay = response[0];
    });
  }

  openAddRoleModal(roleBandId, roleCapabilityId) {
    const modalRef = this.modalService.open(AddRoleModalComponent);
    modalRef.componentInstance.departmentId = this.id;
    modalRef.componentInstance.bandId = roleBandId;
    modalRef.componentInstance.capabilityId =  roleCapabilityId;
  }
}
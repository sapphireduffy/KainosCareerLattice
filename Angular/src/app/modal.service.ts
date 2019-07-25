import { Injectable } from '@angular/core';
import { DataService } from './_services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleInformationComponent } from './role-information/role-information.component';
import { BandInformationComponent } from './band-information/band-information.component';
import { AddRoleModalComponent } from './add-role-modal/add-role-modal.component';
import { AddCapabilityComponent } from './add-capability/add-capability.component';
import { EditRoleModalComponent } from './edit-role-modal/edit-role-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

  async openRoleInfoModal(selectedRoleId){
    await this.dataService.getRoleInformation(selectedRoleId).then(response => {
      const modalRef = this.modalService.open(RoleInformationComponent, { backdrop: "static" });
      modalRef.componentInstance.roleToDisplay = response[0];
    });
  }

  async openBandInfoModal(selectedBandId) {
    await this.dataService.getBandInformation(selectedBandId).then(response => {
      const modalRef = this.modalService.open(BandInformationComponent, { backdrop: "static" });
      modalRef.componentInstance.bandToDisplay = response[0];
    });
  }

  openAddRoleModal(roleBandId, roleCapabilityId, departmentId) {
    return new Promise( ( resolve, reject ) => {
      const modalRef = this.modalService.open(AddRoleModalComponent, { backdrop: "static" });
      modalRef.componentInstance.departmentId = departmentId;
      modalRef.componentInstance.bandId = roleBandId;
      modalRef.componentInstance.capabilityId =  roleCapabilityId;
      modalRef.componentInstance.roleAdded.subscribe(data =>{
        resolve(data.data)
      });
    })
  }

  openEditRoleModal(roleId, capabilities, bands) {
    return new Promise( ( resolve, reject ) => {
      this.dataService.getEditRole(roleId).then(response => {
        const modalRef = this.modalService.open(EditRoleModalComponent, { backdrop: "static" });
        modalRef.componentInstance.roleToEdit = response[0];
        modalRef.componentInstance.capabilities = capabilities;
        modalRef.componentInstance.bands = bands;
        modalRef.componentInstance.roleEdited.subscribe(data =>{
          resolve(data.data)
        });
      });
    })
  }

  openAddCapabilityModal(departmentId) {
    return new Promise((resolve, reject) => {
      const modalRef = this.modalService.open(AddCapabilityComponent);
      modalRef.componentInstance.departmentId = departmentId;

      modalRef.componentInstance.capabilityAdded.subscribe(data => {
        resolve(data.data)
      })
    })
  }
}

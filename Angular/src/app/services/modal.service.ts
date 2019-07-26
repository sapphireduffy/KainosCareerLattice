import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleInformationComponent } from '../role-information/role-information.component';
import { BandInformationComponent } from '../band-information/band-information.component';
import { AddRoleModalComponent } from '../add-role-modal/add-role-modal.component';
import { AddCapabilityComponent } from '../add-capability/add-capability.component';
import { EditRoleModalComponent } from '../edit-role-modal/edit-role-modal.component';
import { EditCapabilityModalComponent } from '../edit-capability-modal/edit-capability-modal.component';
import { AddBandComponent } from '../add-band/add-band.component';
import { EditBandModalComponent } from '../edit-band-modal/edit-band-modal.component';
import { CapabilityModalComponent } from '../capability-modal/capability-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

  async openRoleInfoModal(selectedRoleId) {
    await this.dataService.getRole(selectedRoleId).then(response => {
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

  async openEditBandModal(selectedBand) {
    return new Promise((resolve, reject) => {
      const modalRef = this.modalService.open(EditBandModalComponent, { backdrop: "static" });
      modalRef.componentInstance.bandToEdit = selectedBand;
      modalRef.componentInstance.bandEdited.subscribe(data => {
        resolve(data)
      });
    })
  }

  async openCapabilityInfoModal(capabilityId) {
    await this.dataService.getCapabilityDetails(capabilityId).then(response => {
      const modalRef = this.modalService.open(CapabilityModalComponent, { backdrop: "static" })
      modalRef.componentInstance.capability = response[0]
    });
  }

  openAddRoleModal(roleBandId, roleCapabilityId, departmentId) {
    return new Promise((resolve, reject) => {
      const modalRef = this.modalService.open(AddRoleModalComponent, { backdrop: "static" });
      modalRef.componentInstance.departmentId = departmentId;
      modalRef.componentInstance.bandId = roleBandId;
      modalRef.componentInstance.capabilityId = roleCapabilityId;
      modalRef.componentInstance.roleAdded.subscribe(data => {
        resolve(data)
      });
    })
  }

  openAddCapabilityModal(departmentId) {
    return new Promise((resolve, reject) => {
      const modalRef = this.modalService.open(AddCapabilityComponent, { backdrop: "static" });
      modalRef.componentInstance.departmentId = departmentId;
      modalRef.componentInstance.capabilityAdded.subscribe(data => {
        resolve(data)
      })
    })
  }

  openAddBandModal(departmentId, aboveValue, belowValue, schoolId) {
    return new Promise((resolve, reject) => {
      const modalRef = this.modalService.open(AddBandComponent, { backdrop: "static" });
      modalRef.componentInstance.schoolId = schoolId;
      modalRef.componentInstance.abovePriorityVal = aboveValue;
      modalRef.componentInstance.belowPriorityVal = belowValue;
      modalRef.componentInstance.departmentId = departmentId;
      modalRef.componentInstance.bandAdded.subscribe(data => {
        resolve(data)
      });
    });
  }

  openEditRoleModal(roleId, capabilities, bands) {
    return new Promise((resolve, reject) => {
      this.dataService.getRole(roleId).then(response => {
        const modalRef = this.modalService.open(EditRoleModalComponent, { backdrop: "static" });
        modalRef.componentInstance.roleToEdit = response[0];
        modalRef.componentInstance.capabilities = capabilities;
        modalRef.componentInstance.bands = bands;
        modalRef.componentInstance.roleEdited.subscribe(data => {
          resolve(data)
        });
      });
    })
  }

    async openEditCapabilityModal(capabilityId, departments) {
    return new Promise((resolve, reject) => {
      this.dataService.getEditCapability(capabilityId).then(response => {
        const modalRef = this.modalService.open(EditCapabilityModalComponent, { backdrop: "static" });
        modalRef.componentInstance.capabilityToEdit = response[0];
        modalRef.componentInstance.departments = departments;
        modalRef.componentInstance.capabilityEdited.subscribe(data => {
          resolve(data)
        });
      });
    })
  }
}

import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleInformationComponent } from "../role-information/role-information.component";
import { BandInformationComponent } from '../band-information/band-information.component';

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

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    var urlParams = new URLSearchParams(window.location.search);
    var id = parseInt(urlParams.get("id"));
    console.log(id)

    this.dataService.getCapabilityNamesByDepartment(id).then(response => {
      console.log(response)
      this.capabilities = response;
    });

    this.dataService.getRolesInDepartment(id).then(response => {
      console.log(response)
      this.jobsInDep = response;
    });

    this.dataService.getBands().then(response => {
      console.log(response)
      this.bands = response;
    });

    this.dataService.getDepartmentDetails(id).then(response => {
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
    return {"Role":"Add new role", "ID":-1}
  }

  async openRoleInfoModal(selectedRoleId) {
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
}
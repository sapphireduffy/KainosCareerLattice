import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleInformationComponent } from "../role-information/role-information.component";

@Component({
  selector: "app-career-table",
  templateUrl: "./career-table.component.html",
  styleUrls: ["./career-table.component.css"]
})
export class CareerTableComponent implements OnInit {
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

  async openRoleInfoModal(selectedRoleId) {
    await this.dataService.getRoleInformation(selectedRoleId).then(response => {
      const modalRef = this.modalService.open(RoleInformationComponent);
      modalRef.componentInstance.roleToDisplay = response[0];
    });
  }
}
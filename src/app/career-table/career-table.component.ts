import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleInformationComponent } from "../role-information/role-information.component";
import { Role } from "../_classes/role";

@Component({
  selector: "app-career-table",
  templateUrl: "./career-table.component.html",
  styleUrls: ["./career-table.component.css"]
})
export class CareerTableComponent implements OnInit {
  rolesCapabilityMap = new Map<string, Role[]>();
  capabilities = [];
  roleCapabilityData: any;
  departmentName: any;

  roles = [];

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.dataService.getCapabilityNamesByDepartment(2).then(response => {
      this.capabilities = response;
    });

    this.dataService.getAllData(2).then(response => {
      this.roleCapabilityData = response;
      this.sortRoleCapabilityMap();
    });

    this.dataService.getDepartmentDetails(2).then(response => {
      this.departmentName = response;
    });
  }

  sortRoleCapabilityMap() {
    for (let capability of this.capabilities) {
      this.roles = [];
      for (let roleCap of this.roleCapabilityData) {
        if (capability.name == roleCap.CapabilityName) {
          var roleToDisplay: Role = {
            roleID: roleCap.RoleId,
            Name: roleCap.RoleName
          };
          this.roles.push(roleToDisplay);
        }
      }
      this.rolesCapabilityMap.set(capability.name, this.roles);
    }
  }

  async openRoleInfoModal(selectedRoleId) {
    await this.dataService.getRoleInformation(selectedRoleId).then(response => {
      const modalRef = this.modalService.open(RoleInformationComponent);
      modalRef.componentInstance.roleToDisplay = response[0];
    });
  }
}

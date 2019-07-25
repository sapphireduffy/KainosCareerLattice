import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalService } from '../services/modal.service';

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
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    var urlParams = new URLSearchParams(window.location.search);
    var id = parseInt(urlParams.get("id"));

    this.dataService.getCapabilityNamesByDepartment(id).then(response => {
      this.capabilities = response;
    });
    this.dataService.getRolesInDepartment(id).then(response => {
      this.jobsInDep = response;
    });
    this.dataService.getBands().then(response => {
      this.bands = response;
    });
    this.dataService.getDepartmentDetails(id).then(response => {
      this.departmentName = response;
    });
  }
}

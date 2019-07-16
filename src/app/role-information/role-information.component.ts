import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../_services/data.service";
import { Subscription } from "rxjs";
import { ThrowStmt } from "@angular/compiler";
@Component({
  selector: "app-role-information",
  templateUrl: "./role-information.component.html",
  styleUrls: ["./role-information.component.css"]
})
export class RoleInformationComponent implements OnInit {
  @Input() roleToDisplay: any;
  loaded = false;
  modalColour;
  topBand = ["Executive", "Leadership Community", "Principal"];
  middleBand = ["Manager", "Consultant", "Senior Associate"];
  startBand = ["Associate", "Trainee", "Apprentice"];
  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) {
    this.roleToDisplay = {};
  }

  ngOnInit(): void {
    if (this.roleToDisplay != null && this.roleToDisplay) {
      this.loaded = true;
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  setModalColour(role: any) {
    console.log(role);
    for (let top of this.topBand) {
      if (role.Band == top) {
        this.modalColour = "#4e2c7e";
      }
    }
    for (let top of this.middleBand) {
      if (role.Band == top) {
        this.modalColour = "#004278";
      }
    }

    for (let top of this.startBand) {
      if (role.Band == top) {
        this.modalColour = "#009639";
      }
    }
  }
}

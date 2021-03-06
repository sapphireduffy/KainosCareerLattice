import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "../model/Role";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-add-role-modal",
  templateUrl: "./add-role-modal.component.html",
  styleUrls: ["./add-role-modal.component.css"]
})
export class AddRoleModalComponent implements OnInit {
  @Input() departmentId;
  @Input() bandId;
  @Input() capabilityId;
  @Output() roleAdded = new EventEmitter();
  newRole: Role;
  public addRoleForm: FormGroup;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService,
  ) { }

  roleNameMaxLength = 100
  roleSummaryMaxLength = 1000
  roleSharepointMaxLength = 500

  ngOnInit() {
    this.addRoleForm = this.formBuilder.group({
      roleName: ["", Validators.maxLength(this.roleNameMaxLength)],
      roleSummary: ["", Validators.maxLength(this.roleSummaryMaxLength)],
      roleSharePointLink: ["", Validators.maxLength(this.roleSharepointMaxLength)]
    });
  }

  get formControls() {
    return this.addRoleForm.controls;
  }

  closeModal() {
    this.activeModal.close();
  }

  setNewRole() {
    this.newRole = {
      roleName: this.addRoleForm.get("roleName").value,
      departmentId: this.departmentId,
      bandId: this.bandId,
      summary: this.addRoleForm.get("roleSummary").value,
      jobSpecUrl: this.addRoleForm.get("roleSharePointLink").value,
      capabilityId: this.capabilityId
    };
  }

  onSubmit() {
    this.submitted = true;
    if (this.addRoleForm.invalid) {
      return;
    }
    this.setNewRole();

    this.dataService
      .createRole(this.newRole)
      .then(result => this.roleAdded.emit(result))
      .catch(error => {
        this.roleAdded.emit(error);
      });
    this.closeModal();
  }
}

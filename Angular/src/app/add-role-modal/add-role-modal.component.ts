import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "../model/Role";
import { DataService } from "../_services/data.service";

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
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.addRoleForm = this.formBuilder.group({
      roleName: ["", Validators.required],
      roleSummary: ["", Validators.maxLength(65000)],
      roleSharePointLink: ["", Validators.maxLength(500)]
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

    console.log(this.newRole);

    this.dataService
      .createRole(this.newRole)
      .then(result => this.roleAdded.emit(result))
      .catch(error => {
        this.roleAdded.emit(error);
      });
    this.closeModal();
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "../model/Role";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-edit-role-modal",
  templateUrl: "./edit-role-modal.component.html",
  styleUrls: ["./edit-role-modal.component.css"]
})
export class EditRoleModalComponent implements OnInit {
  @Input() roleToEdit: any;
  @Output() roleEdited = new EventEmitter();
  roleExists;
  editedRole: Role;
  initialBandId: number;
  initialCapabilityId: number;
  public editRoleForm: FormGroup;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.initialBandId = this.roleToEdit.band_id;
    this.initialCapabilityId = this.roleToEdit.capability_id;

    this.editRoleForm = this.formBuilder.group({
      roleName: [this.roleToEdit.RoleName, Validators.required],
      roleSummary: [this.roleToEdit.summary, Validators.maxLength(65000)],
      roleSharePointLink: [this.roleToEdit.job_spec_url, Validators.maxLength(500)],
      roleBand: [this.roleToEdit.band_id],
      roleCapability: [this.roleToEdit.capability_id]
    });
  }

  get formControls() {
    return this.editRoleForm.controls;
  }

  closeModal() {
    this.activeModal.close();
  }

  setEditRole() {
    this.editedRole = {
      roleId: this.roleToEdit.role_id,
      roleName: this.editRoleForm.get("roleName").value,
      summary: this.editRoleForm.get("roleSummary").value,
      jobSpecUrl: this.editRoleForm.get("roleSharePointLink").value,
      capabilityId: this.editRoleForm.get("roleCapability").value,
      bandId: this.editRoleForm.get("roleBand").value
    };
  }

  async onSubmit() {
    this.submitted = true;
    if (this.editRoleForm.invalid) {
      return;
    }
    this.setEditRole();
    await this.checkIfRoleExists();
    
    if ((this.editedRole.bandId == this.initialBandId)
      && (this.editedRole.capabilityId == this.initialCapabilityId)) {
        this.writeToDatabse();
      }
      else if ((this.roleExists == false )) {
        this.writeToDatabse();
      }
  }

  async checkIfRoleExists() {
    await this.dataService
      .getRoleBandCapabilityExists(this.editedRole.capabilityId, this.editedRole.bandId)
      .then(
        result => {
          this.roleExists = result[0]["result"] == 1 ? true : false;
        })
      .catch(error => {
        console.log(error);
      });
  }

  writeToDatabse() {
         this.dataService
        .editRole(this.editedRole)
        .then(result => this.roleEdited.emit(result))
        .catch(error => {
          this.roleEdited.emit(error);
        });
      this.closeModal();
  }

  deleteRole() {
    if (confirm("Are you sure you want to delete this role ")) {
      this.dataService.deleteRole(this.roleToEdit.role_id).then(response => {
        console.log(response)
        this.roleEdited.emit(response);
      })
    }
    this.closeModal();
  }
}
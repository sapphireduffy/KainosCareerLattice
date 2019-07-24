import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "../model/Role";
import { DataService } from "../_services/data.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: "app-edit-role-modal",
  templateUrl: "./edit-role-modal.component.html",
  styleUrls: ["./edit-role-modal.component.css"]
})
export class EditRoleModalComponent implements OnInit {
  @Input() roleToEdit: any;
  @Input() currentCapabilityId: any;
  @Input() currentBandId: any;
  @Input() capbilities: any;
  @Input() bands: any;
  @Output() roleEdited = new EventEmitter();
  editedRole: Role;
  public editRoleForm: FormGroup;
  public submitted = false;
  public currentBandName;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

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
    console.log(this.editedRole)
  }


  deleteRole() {
    if (confirm("Are you sure you want to delete this role ")) {
      this.dataService.deleteRole(this.roleToEdit.role_id).then(response => {
        console.log(response)
      })
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.editRoleForm.invalid) {
      return;
    }
    this.setEditRole();

    this.dataService
      .editRole(this.editedRole)
      .then(result => this.roleEdited.emit(result))
      .catch(error => {
        this.roleEdited.emit(error);
      });
    this.closeModal();
  }



}

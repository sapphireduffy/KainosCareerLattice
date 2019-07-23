import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "../model/Role";
import { DataService } from "../_services/data.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: "app-edit-role-modal",
  templateUrl: "./edit-role-modal.component.html",
  styleUrls: ["./edit-role-modal.component.css"]
})
export class EditRoleModalComponent implements OnInit {
  @Input() departmentId;
  @Input() bandId;
  @Input() capabilityId;
  @Output() roleEdited = new EventEmitter();
  editedRole: Role;
  public editRoleForm: FormGroup;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editRoleForm = this.formBuilder.group({
      roleName: ["", Validators.required],
      roleSummary: ["", Validators.maxLength(65000)],
      roleSharePointLink: ["", Validators.maxLength(500)]
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
      roleName: this.editRoleForm.get("roleName").value,
      departmentId: this.departmentId,
      bandId: this.bandId,
      summary: this.editRoleForm.get("roleSummary").value,
      jobSpecUrl: this.editRoleForm.get("roleSharePointLink").value,
      capabilityId: this.capabilityId
    };
  }
  deleteUser(){
    return confirm("Are you sure?");
  
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.editRoleForm.invalid) {
      return;
    }
    this.setEditRole();

    console.log(this.editedRole);

    this.dataService
      .editRole(this.editedRole)
      .then(result => this.roleEdited.emit(result))
      .catch(error => {
        this.roleEdited.emit(error);
      });
    this.closeModal();

    
  }



}

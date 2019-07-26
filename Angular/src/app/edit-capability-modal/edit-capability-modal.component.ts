import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Capability } from "../model/capability";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-edit-capability-modal",
  templateUrl: "./edit-capability-modal.component.html",
  styleUrls: ["./edit-capability-modal.component.css"]
})
export class EditCapabilityModalComponent implements OnInit {
  @Input() capabilityToEdit: any;
  @Output() capabilityEdited = new EventEmitter();
  capabilityExists;
  editedCapability: Capability;
  initialCapabilityName: string;
  initialDepartmentId: number;
  public editCapabilityForm: FormGroup;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.initialCapabilityName = this.capabilityToEdit.name;
    this.initialDepartmentId = this.capabilityToEdit.department_id;

    this.editCapabilityForm = this.formBuilder.group({
      capabilityName: [this.capabilityToEdit.name, Validators.required],
      capabilityDepartment: [this.capabilityToEdit.department_id]
    });
  }

  get formControls() {
    return this.editCapabilityForm.controls;
  }

  closeModal() {
    this.activeModal.close();
  }

  setEditCapability() {
    this.editedCapability = {
      capabilityId: this.capabilityToEdit.capability_id,
      name: this.editCapabilityForm.get("capabilityName").value,
      departmentId: this.editCapabilityForm.get("capabilityDepartment").value,
    };
  }

  async onSubmit() {
    this.submitted = true;
    if (this.editCapabilityForm.invalid) {
      return;
    }
    this.setEditCapability();
    await this.checkIfCapabilityExists();
    if (this.editedCapability.name === this.initialCapabilityName) {
      if(this.editedCapability.departmentId === this.initialDepartmentId) {
        this.closeModal();
      }
      }
     if (this.capabilityExists == false) {
        this.writeToDatabase();
      }
  }

  async checkIfCapabilityExists() {
    await this.dataService
      .getCapabilityExists(this.editedCapability.name, this.editedCapability.departmentId)
        .then(
          result => {
            this.capabilityExists = result[0]["result"] == 1 ? true : false;
        })
        .catch(error => {
      console.log(error);
      });
  }

  writeToDatabase() {
    this.dataService
      .editCapability(this.editedCapability)
        .then(result => this.capabilityEdited.emit(result))
          .catch(error => {
            this.capabilityEdited.emit(error);
          });
    this.closeModal();
  }
}
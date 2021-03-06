import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Capability } from "../model/capability";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-add-capability',
  templateUrl: './add-capability.component.html',
  styleUrls: ['./add-capability.component.css']
})
export class AddCapabilityComponent implements OnInit {

  @Input() departmentId;
  @Output() capabilityAdded = new EventEmitter();
  newCapability: Capability;
  public addCapabilityForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.addCapabilityForm = this.formBuilder.group({
      capabilityName: ["", Validators.required]
    });
  }

  get formControls() {
    return this.addCapabilityForm.controls;
  }

  closeModal() {
    this.activeModal.close();
  }

  setNewCapability() {
    this.newCapability = {
      departmentId: this.departmentId,
      name: this.addCapabilityForm.get("capabilityName").value
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.addCapabilityForm.invalid) {
      return;
    }
    this.setNewCapability();

    console.log(this.newCapability);

    this.dataService
      .createCapability(this.newCapability)
      .then(result => this.capabilityAdded.emit(result))
      .catch(error => {
        this.capabilityAdded.emit(error);
      });
    this.closeModal();
  }
}

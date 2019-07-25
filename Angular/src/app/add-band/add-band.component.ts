import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Band } from "../model/band";
import { DataService } from "../_services/data.service";
import { Observable } from 'rxjs';

const DESCRIPTION_MAX_LEN = 16777215

@Component({
  selector: "app-add-band",
  templateUrl: "./add-band.component.html",
  styleUrls: ["./add-band.component.css"]
})
export class AddBandComponent implements OnInit {

  @Input() departmentId;
  @Input() abovePriorityVal;
  @Input() belowPriorityVal;
  @Input() schoolId;
  @Output() bandAdded = new EventEmitter();
  newBand: Band;
  public addBandForm: FormGroup;
  public submitted = false;
  descriptionId;
  showDescription = false;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.addBandForm = this.formBuilder.group({
      bandName: ["", Validators.required],
      commercialAwarenessDescription: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      communicatingAndTeamwork: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      innovationAndContinuousImprovement: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      customerFocus: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      developingYourselfAndOthers: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      planningAndOrganisation: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      jobSpecificKnowledge: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      training: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)],
      responsibilities: ["", Validators.maxLength(DESCRIPTION_MAX_LEN)]
    });
  }

  get formControls() {
    return this.addBandForm.controls;
  }

  closeModal() {
    this.activeModal.close();
  }

  setNewBand() {
    this.newBand = {
      departmentId: this.departmentId,
      name: this.addBandForm.get("bandName").value,
      schoolId: +this.schoolId,
      commercialAwareness: this.addBandForm.get("commercialAwarenessDescription").value,
      communicatingAndTeamwork: this.addBandForm.get("communicatingAndTeamwork").value,
      innovationAndContinuousImprovement: this.addBandForm.get("innovationAndContinuousImprovement").value,
      customerFocus: this.addBandForm.get("customerFocus").value,
      developingYourselfAndOthers: this.addBandForm.get("developingYourselfAndOthers").value,
      planningAndOrganisation: this.addBandForm.get("planningAndOrganisation").value,
      jobSpecificKnowledge: this.addBandForm.get("jobSpecificKnowledge").value,
      training: this.addBandForm.get("training").value,
      responsibilities: this.addBandForm.get("responsibilities").value,
      aboveValue: this.abovePriorityVal,
      belowValue: this.belowPriorityVal
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.addBandForm.invalid) {
      return;
    }
    this.setNewBand();

    console.log(this.newBand);

    this.dataService
      .createBand(this.newBand)
      .then(result => this.bandAdded.emit(result))
      .catch(error => {
        this.bandAdded.emit(error);
      });
    this.closeModal();
  }

  toggleDescription(){
    this.showDescription  = !this.showDescription;
  }
}

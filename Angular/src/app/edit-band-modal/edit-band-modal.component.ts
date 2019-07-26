import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
const DESCRIPTION_MAX_LEN = 1000
@Component({
  selector: 'app-edit-band-modal',
  templateUrl: './edit-band-modal.component.html',
  styleUrls: ['./edit-band-modal.component.css']
})

export class EditBandModalComponent implements OnInit {
  @Input() bandToEdit;
  @Input() schools;
  public editBandForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.bandToEdit)
    console.log(this.schools)

    this.editBandForm = this.formBuilder.group({
      bandName: [this.bandToEdit.name, Validators.required],
      school: [this.bandToEdit.school_id],
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


  closeModal() {
    this.activeModal.close();
  }

}

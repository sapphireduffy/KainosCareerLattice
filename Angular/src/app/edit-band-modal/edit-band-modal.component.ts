import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-edit-band-modal',
  templateUrl: './edit-band-modal.component.html',
  styleUrls: ['./edit-band-modal.component.css']
})

export class EditBandModalComponent implements OnInit {
  @Input() bandToEdit;
  @Output() bandEdited = new EventEmitter();
  public editBandForm: FormGroup;
  public submitted = false;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dataService: DataService) { }

  ngOnInit() {
    this.editBandForm = this.formBuilder.group({
      bandName: [this.bandToEdit.name, Validators.required]
    });
  }

  get formControls() {
    return this.editBandForm.controls;
  }


  closeModal() {
    this.activeModal.close();
  }

  onSubmit() {
    this.submitted = true;
    if (this.editBandForm.invalid) {
      return;
    }
    var updatedBand = {
      "name": this.editBandForm.get("bandName").value,
      "band_id": this.bandToEdit.band_id
    }

    this.dataService
      .editBand(updatedBand)
      .then(
        result => {
          this.bandEdited.emit(result);
        })
      .catch(error => {
        this.bandEdited.emit(error);
      });

    this.closeModal();
  }
}

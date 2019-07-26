import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-capability-modal',
  templateUrl: './capability-modal.component.html',
  styleUrls: ['./capability-modal.component.css']
})
export class CapabilityModalComponent implements OnInit {
  @Input() capability;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}

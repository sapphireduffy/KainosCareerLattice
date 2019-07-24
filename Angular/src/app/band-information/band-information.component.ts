import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-band-information",
  templateUrl: "./band-information.component.html",
  styleUrls: ["./band-information.component.css"]
})
export class BandInformationComponent implements OnInit {
  @Input() bandToDisplay;
  modalColour: string;
  
  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit() {}

  closeModal() { this.activeModal.close(); }
}
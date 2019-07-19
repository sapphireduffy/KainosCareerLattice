import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";

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
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  closeModal() { this.activeModal.close(); }
}

// console.log(this.bandToDisplay);

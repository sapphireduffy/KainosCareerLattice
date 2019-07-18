import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-role-information",
  templateUrl: "./role-information.component.html",
  styleUrls: ["./role-information.component.css"]
})
export class RoleInformationComponent implements OnInit {
  @Input() roleToDisplay;
  modalColour: string;
  safeUrl;

  constructor(
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.safeUrl = this.sanitise(this.roleToDisplay.job_spec_url);
  }

  closeModal() {
    this.activeModal.close();
  }

  sanitise(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

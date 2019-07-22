import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {

  @Input() alertMessage;
  @Input() alertType;
   public  alertClosed = false;
 
  constructor() { }
  ngOnInit() {
    setTimeout(() => this.alertClosed = true, 3000);
  }
}

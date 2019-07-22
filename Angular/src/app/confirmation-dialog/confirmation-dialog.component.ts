import {Directive, ElementRef, EventEmitter, Inject, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[ConfirmationDialogComponent]'
})

export class ConfirmationDialogComponent implements OnInit {

  @Output() then = new EventEmitter<boolean>();
  @Output() else = new EventEmitter<boolean>();

  constructor(@Inject(ElementRef) private element: ElementRef) { }

  ngOnInit(): void {
    const directive = this;
    this.element.nativeElement.onclick = function() {
      const result = confirm('Are you sure?');
      if (result) {
        directive.then.emit(true);
      } else {
        directive.else.emit(true);
      }
    };
  }
}
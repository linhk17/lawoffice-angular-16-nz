import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-detail-calendar',
  templateUrl: './modal-detail-calendar.component.html',
  styleUrls: ['./modal-detail-calendar.component.scss']
})
export class ModalDetailCalendarComponent {
  @Input() isVisible = false;
  @Input() data: any;
  @Output() isCloseModal = new EventEmitter();

  ngOnInit(): void {
    console.log(this.data);
    
  }
  handleCancel(): void {
    this.isVisible = false;
    this.isCloseModal.emit(this.isVisible);
  }
}

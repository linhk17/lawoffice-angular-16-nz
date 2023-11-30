import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  @Input() typeConfirm: string = 'normal';
  @Input() btnTitle: string = '';
  @Input() titleConfim: string = '';
  @Input() contentConfirm: string = '';
  @Output() isConfirm = new EventEmitter();
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: this.titleConfim,
      nzContent: this.contentConfirm,
      nzOkDanger: this.typeConfirm == 'error',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.isConfirm.emit(true))
          }, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}

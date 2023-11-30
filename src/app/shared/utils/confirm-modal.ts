import { Component } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-confirm-promise',
  template: ''
})
export class NzModalConfirmPromise {
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService) {}

  public showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
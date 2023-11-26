import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  constructor(private message: NzMessageService) {}

  public createMessage(type: string, mess: string): void {
    this.message.create(type, mess);
  }
}

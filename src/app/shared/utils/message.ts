import { NzMessageService } from 'ng-zorro-antd/message';
export class Message {
  constructor(private message: NzMessageService) {}

  public createMessage(type: string, mess: string): void {
    this.message.create(type, mess);
  }
}

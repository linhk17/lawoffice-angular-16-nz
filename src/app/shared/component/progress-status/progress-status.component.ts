import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.scss']
})
export class ProgressStatusComponent {
  @Input() title: string = '';
  @Input() status: number = 0;

}

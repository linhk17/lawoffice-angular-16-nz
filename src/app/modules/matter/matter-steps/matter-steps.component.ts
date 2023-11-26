import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matter-steps',
  templateUrl: './matter-steps.component.html',
  styleUrls: ['./matter-steps.component.scss'],
})
export class MatterStepsComponent {
  @Input() steps: any;
  @Input() isEdit: boolean = false;

}

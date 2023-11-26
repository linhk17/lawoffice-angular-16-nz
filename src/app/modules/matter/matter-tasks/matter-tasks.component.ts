import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matter-tasks',
  templateUrl: './matter-tasks.component.html',
  styleUrls: ['./matter-tasks.component.scss']
})
export class MatterTasksComponent {
  @Input() tasks: any;
}

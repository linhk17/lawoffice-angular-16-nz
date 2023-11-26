import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matter-contacts',
  templateUrl: './matter-contacts.component.html',
  styleUrls: ['./matter-contacts.component.scss'],
})
export class MatterContactsComponent {
  @Input() contacts: any;
  @Input() isEdit: boolean = false;
}

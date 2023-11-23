import { Component } from '@angular/core';
import { menuSideNav } from 'src/app/shared/utils/data-sidenav';

@Component({
  selector: 'app-manage-layout',
  templateUrl: './manage-layout.component.html',
  styleUrls: ['./manage-layout.component.scss']
})
export class ManageLayoutComponent {
  isCollapsed = false;
  listSideNav = menuSideNav;
}

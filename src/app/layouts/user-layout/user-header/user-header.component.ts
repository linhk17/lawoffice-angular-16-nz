import { Component } from '@angular/core';
import { dataSidenavTop, menuSidenav } from 'src/app/shared/utils/data-header';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
  listSidenavTop = dataSidenavTop;
  listMenuSidenav = menuSidenav;
}

import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.interface';
import { menuSideNavTVV, menuSideNavAdmin, menuSideNavLaw } from 'src/app/shared/utils/data-sidenav';

@Component({
  selector: 'app-manage-layout',
  templateUrl: './manage-layout.component.html',
  styleUrls: ['./manage-layout.component.scss']
})
export class ManageLayoutComponent {
  isCollapsed = false;
  listSideNav: any = [];
  role: string | number = '';
  public user?: any;

  constructor(
    private userService: UserService,
    private storage: StorageService
  ){}

  ngOnInit(){

    this.userService.getProfileUser();
    this.userService.currentUser.subscribe(res => this.user = res);

    this.role = this.storage.getUser().role;
    this.listSideNav = this.role == 1 ? menuSideNavAdmin 
    : this.role == 2 ? menuSideNavLaw : menuSideNavTVV
  }
  logout(){
    this.storage.clean()
  }
}

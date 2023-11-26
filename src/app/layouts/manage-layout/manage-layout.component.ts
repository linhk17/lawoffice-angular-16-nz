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
  public user?: User;

  constructor(
    private userService: UserService,
    private storage: StorageService
  ){}

  ngOnInit(){
    this.getProfileUser();
    this.role = this.storage.getUser().role;
    this.listSideNav = this.role == 1 ? menuSideNavAdmin 
    : this.role == 2 ? menuSideNavLaw : menuSideNavTVV
  }
  getProfileUser() {
    this.userService.getProfileUser().pipe()
    .subscribe((res: any) => {
      this.user = {
        id: res._id,
        fullName: res.ho_ten,
        email: res.email,
        dateOfBirth: res.ngay_sinh,
        part: {
          id: res.bo_phan._id,
          namePart: res.bo_phan.ten_bo_phan
        },
        position: {
          id: res.chuc_vu._id,
          namePosition: res.chuc_vu.ten_chuc_vu
        },
        address: res.dia_chi,
        avatar: res?.avatar,
        phone: res.account.sdt
      }
    })
  }

  logout(){
    this.storage.clean()
  }
}

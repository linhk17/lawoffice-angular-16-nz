import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent {
  user?: any;
  constructor(
    private userService: UserService
  ){}
  ngOnInit(){
    this.userService.getProfileUser();
    this.userService.currentUser.subscribe((res) => {
      this.user = res;
    });
  }
}

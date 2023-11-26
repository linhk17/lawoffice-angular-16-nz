import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concat } from 'rxjs';
import { MatterService } from 'src/app/services/matter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-matter-detail',
  templateUrl: './matter-detail.component.html',
  styleUrls: ['./matter-detail.component.scss']
})
export class MatterDetailComponent {
  matter: any;
  userAccess: any;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private matterService: MatterService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.matterService
        .getById(param['id'])
        .pipe()
        .subscribe((res: any) => {
          this.matter = res;
          this.userService.getByMatter(
            res.truy_cap.khach_hang.concat(res.truy_cap.nhan_vien)
          ).subscribe(res => {
            this.userAccess = res;
            console.log(this.matter.tai_lieu); 
          })
        });
    });
  
  }
  updateMatter(event: any){
    this.matterService.update(this.matter._id, {...this.matter, ...event})
    .subscribe(res => this.matter = res
    )    
  }
  // isEdit(){
  //   this.edit = true;
  // }
}

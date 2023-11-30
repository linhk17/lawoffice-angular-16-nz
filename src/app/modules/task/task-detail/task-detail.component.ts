import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MatterService } from 'src/app/services/matter.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
  task: any;
  matter: any;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private matterService: MatterService,
    private modalService: NzModalService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.taskService.getById(param['id']).subscribe((res) => {
        this.task = res;
        this.matterService
          .getById(res.vu_viec)
          .subscribe((matter) => (this.matter = matter));
      });
    });
  }
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
  updateTask(event: any) {
    this.taskService
      .update(this.task._id, { ...event })
      .subscribe((res) => (this.task = res));
  }
}

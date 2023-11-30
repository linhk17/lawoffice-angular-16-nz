import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.scss'],
})
export class ManageTaskComponent {
  tasks: any = [];
  user: any;
  dataSource: any = [];
  constructor(
    private taskService: TaskService,
    private storage: StorageService
  ) {}
  ngOnInit() {
    this.user = this.storage.getUser();
    console.log(this.user);

    this.taskService.getByTaskMaster(this.user.id)
    .subscribe((res) => {
      this.dataSource = res;
    });
  }
}

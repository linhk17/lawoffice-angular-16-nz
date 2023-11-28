import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-matter-documents',
  templateUrl: './matter-documents.component.html',
  styleUrls: ['./matter-documents.component.scss'],
})
export class MatterDocumentsComponent {
  @Input() documents: any[] = [];
  @Input() edit: boolean = false;
  @Output() uploadFile = new EventEmitter();
  // docs: any = [];
  file: any;
  error: boolean = false;
  constructor() {}
  ngOnInit() {
    this.documents ? (this.documents = this.documents) : (this.documents = []);
  }
  transformFile(e: any) {
    let selected = e.target.files[0];
    if (selected.size > 5 * 1024 * 1024) {
      this.error = true;
    } else {
      this.error = false;
      let reader = new FileReader();
      reader.readAsDataURL(selected);
      reader.onload = (e: any) => {
        this.documents.push({
          key: this.documents ? this.documents.length : 0,
          lastModified: selected.lastModified,
          lastModifiedDate: selected.lastModifiedDate,
          name: selected.name,
          size: selected.size,
          type: selected.type,
          file: e.target.result,
        });
        this.uploadFile.emit({
          tai_lieu: this.documents,
        });
      };
    }
  }
  handleFile(file: File, name: string) {
    let a = document.createElement('a');
    a.href = `${file}`;
    a.download = `${name}`;
    document.body.appendChild(a);
    a.click();
    a.parentNode?.removeChild(a);
  }
  deleteFile(key: string | number) {
    const arr = this.documents.filter((item: any) => item.key !== key);
  }
}

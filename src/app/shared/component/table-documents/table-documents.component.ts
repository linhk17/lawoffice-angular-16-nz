import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalConfirmPromise } from '../../utils/confirm-modal';

@Component({
  selector: 'app-table-documents',
  templateUrl: './table-documents.component.html',
  styleUrls: ['./table-documents.component.scss']
})
export class TableDocumentsComponent {
  @Input() documents: any[] = [];
  @Input() edit: boolean = false;
  @Output() uploadFile = new EventEmitter();
  file: any;
  error: boolean = false;
  constructor() {}
  ngOnInit() {
    this.documents ? (this.documents = this.documents) : (this.documents = []);
  }
  transformFile(e: any) {
    let selected = e.target.files[0];
    if (selected.size > 50000) {
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
    // this.showModal.showConfirm()
    const arr = this.documents.filter((item: any) => item.key !== key);
    this.uploadFile.emit({
      tai_lieu: arr
    })
    console.log(this.documents, arr);
    
  }
}

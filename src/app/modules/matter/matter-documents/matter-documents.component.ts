import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matter-documents',
  templateUrl: './matter-documents.component.html',
  styleUrls: ['./matter-documents.component.scss']
})
export class MatterDocumentsComponent {
  @Input() documents: any;
  constructor(){
    console.log(this.documents);
    
  }
  ngOnInit(){
    console.log(this.documents);
  }

  handleFile(file: File, name: string){
    let a = document.createElement("a");
        a.href = `${file}`;
        a.download = `${name}`;
        document.body.appendChild(a);
        a.click();
        a.parentNode?.removeChild(a);
  }
  deleteFile(key: string | number){
    const arr = this.documents.filter((item: any) => item.key !== key);
  }
}

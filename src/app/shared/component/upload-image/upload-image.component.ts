import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { getBase64 } from '../../utils/get-base64';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  @Input() avatar: string = '';
  @Output() imageUploaded = new EventEmitter();
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  constructor(){}
  ngOnInit(){
    this.fileList = [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: this.avatar
      }
    ]
    console.log(this.fileList);
    
  }
  ngOnChange(){
    console.log(this.avatar);

  }
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    console.log(file);
    
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  setAvatar = async (event: any) =>{
    console.log(event);
    if(event){
      const file = await getBase64(event[0].originFileObj);
      this.imageUploaded.emit(file)
    }
  }
}

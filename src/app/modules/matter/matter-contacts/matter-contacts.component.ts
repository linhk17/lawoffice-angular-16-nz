import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { relationship } from 'src/app/shared/utils/data-matter';

@Component({
  selector: 'app-matter-contacts',
  templateUrl: './matter-contacts.component.html',
  styleUrls: ['./matter-contacts.component.scss'],
})
export class MatterContactsComponent {
  @Input() contacts: any;
  @Input() edit: boolean = false;
  @Output() updateContact = new EventEmitter();
  isVisible = false;
  listRelationship = relationship;

  contactsForm: FormGroup<{
    ho_ten:  FormControl<string>;
    mqh: FormControl<string>;
    gioi_tinh: FormControl<string>;
    sdt: FormControl<string>;
    nam_sinh: FormControl<string>;
    dia_chi: FormControl<string>;
  }>;
  constructor(private fb: NonNullableFormBuilder) {
    this.contactsForm = this.fb.group({
      ho_ten: ['', [Validators.required]],
      mqh: ['', [Validators.required]],
      gioi_tinh: ['', [Validators.required]],
      sdt: ['', [Validators.required]],
      dia_chi: ['', [Validators.required]],
      nam_sinh: ['', [Validators.required]],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  submitForm(): void {
    if (this.contactsForm.valid) {
      this.updateContact.emit({lien_he: [...this.contacts, this.contactsForm.value]})
      this.contactsForm.reset();
      this.handleCancel();
    } else {
      Object.values(this.contactsForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}

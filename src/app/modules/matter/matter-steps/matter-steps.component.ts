import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-matter-steps',
  templateUrl: './matter-steps.component.html',
  styleUrls: ['./matter-steps.component.scss'],
})
export class MatterStepsComponent {
  @Input() steps: any;
  @Input() service: any;
  @Input() edit: boolean = false;
  @Output() updatePeriod = new EventEmitter();

  isVisible = false;
  step: any = [];
  stepsForm: FormGroup<{
    ten_qt: FormControl<string>;
    mo_ta: FormControl<string>;
  }>;
  constructor(
    private fb: NonNullableFormBuilder,
    private stepService: StepService
  ) {
    this.stepsForm = this.fb.group({
      ten_qt: ['', [Validators.required]],
      mo_ta: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    console.log(this.service);

    this.getStep();
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  getStep() {
    this.stepService
      .getByIdService(this.service)
      .subscribe((res) => (this.step = res));
  }

  updateStatus(status: number, data: any) {
    this.steps[data._id].status = status;
    this.updatePeriod.emit({
      quy_trinh: [
        ...this.steps
      ],
    });
    
  }

  submitForm(): void {
    if (this.stepsForm.valid) {
      this.updatePeriod.emit({
        quy_trinh: [
          ...this.steps,
          {
            ...this.stepsForm.value,
            _id: this.steps.length,
            status: 0,
          },
        ],
      });
      this.stepsForm.reset()
      this.handleCancel();
    } else {
      Object.values(this.stepsForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterTasksComponent } from './matter-tasks.component';

describe('MatterTasksComponent', () => {
  let component: MatterTasksComponent;
  let fixture: ComponentFixture<MatterTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterTasksComponent]
    });
    fixture = TestBed.createComponent(MatterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterContactsComponent } from './matter-contacts.component';

describe('MatterContactsComponent', () => {
  let component: MatterContactsComponent;
  let fixture: ComponentFixture<MatterContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterContactsComponent]
    });
    fixture = TestBed.createComponent(MatterContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

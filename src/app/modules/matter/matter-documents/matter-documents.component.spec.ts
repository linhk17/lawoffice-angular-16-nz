import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterDocumentsComponent } from './matter-documents.component';

describe('MatterDocumentsComponent', () => {
  let component: MatterDocumentsComponent;
  let fixture: ComponentFixture<MatterDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterDocumentsComponent]
    });
    fixture = TestBed.createComponent(MatterDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

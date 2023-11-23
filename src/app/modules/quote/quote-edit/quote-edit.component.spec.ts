import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEditComponent } from './quote-edit.component';

describe('QuoteEditComponent', () => {
  let component: QuoteEditComponent;
  let fixture: ComponentFixture<QuoteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteEditComponent]
    });
    fixture = TestBed.createComponent(QuoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

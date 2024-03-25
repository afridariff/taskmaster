import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInlineComponent } from './datepicker-inline.component';

describe('DatepickerInlineComponent', () => {
  let component: DatepickerInlineComponent;
  let fixture: ComponentFixture<DatepickerInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerInlineComponent]
    });
    fixture = TestBed.createComponent(DatepickerInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

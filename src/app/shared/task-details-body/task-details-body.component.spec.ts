import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsBodyComponent } from './task-details-body.component';

describe('TaskDetailsBodyComponent', () => {
  let component: TaskDetailsBodyComponent;
  let fixture: ComponentFixture<TaskDetailsBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailsBodyComponent]
    });
    fixture = TestBed.createComponent(TaskDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceDashComponent } from './employee-attendance-dash.component';

describe('EmployeeAttendanceDashComponent', () => {
  let component: EmployeeAttendanceDashComponent;
  let fixture: ComponentFixture<EmployeeAttendanceDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAttendanceDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAttendanceDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetPreferencesComponent } from './timesheet-preferences.component';

describe('TimesheetPreferencesComponent', () => {
  let component: TimesheetPreferencesComponent;
  let fixture: ComponentFixture<TimesheetPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

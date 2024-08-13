import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatesheetListComponent } from './add-ratesheet-list.component';

describe('AddRatesheetListComponent', () => {
  let component: AddRatesheetListComponent;
  let fixture: ComponentFixture<AddRatesheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRatesheetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRatesheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

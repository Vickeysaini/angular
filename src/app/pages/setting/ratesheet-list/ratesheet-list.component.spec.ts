import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesheetListComponent } from './ratesheet-list.component';

describe('RatesheetListComponent', () => {
  let component: RatesheetListComponent;
  let fixture: ComponentFixture<RatesheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesheetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

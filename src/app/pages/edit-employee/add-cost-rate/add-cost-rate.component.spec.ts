import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostRateComponent } from './add-cost-rate.component';

describe('AddCostRateComponent', () => {
  let component: AddCostRateComponent;
  let fixture: ComponentFixture<AddCostRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCostRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCostRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

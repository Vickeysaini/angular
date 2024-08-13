import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRateComponent } from './billing-rate.component';

describe('BillingRateComponent', () => {
  let component: BillingRateComponent;
  let fixture: ComponentFixture<BillingRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

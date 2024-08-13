import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentTeramsComponent } from './view-payment-terams.component';

describe('ViewPaymentTeramsComponent', () => {
  let component: ViewPaymentTeramsComponent;
  let fixture: ComponentFixture<ViewPaymentTeramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentTeramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPaymentTeramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

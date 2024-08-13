import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillRateComponent } from './add-bill-rate.component';

describe('AddBillRateComponent', () => {
  let component: AddBillRateComponent;
  let fixture: ComponentFixture<AddBillRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBillRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

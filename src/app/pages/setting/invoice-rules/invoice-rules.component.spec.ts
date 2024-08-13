import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRulesComponent } from './invoice-rules.component';

describe('InvoiceRulesComponent', () => {
  let component: InvoiceRulesComponent;
  let fixture: ComponentFixture<InvoiceRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

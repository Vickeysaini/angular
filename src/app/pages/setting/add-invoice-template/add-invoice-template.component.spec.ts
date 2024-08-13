import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceTemplateComponent } from './add-invoice-template.component';

describe('AddInvoiceTemplateComponent', () => {
  let component: AddInvoiceTemplateComponent;
  let fixture: ComponentFixture<AddInvoiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

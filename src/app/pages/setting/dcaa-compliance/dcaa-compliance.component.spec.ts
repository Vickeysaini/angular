import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcaaComplianceComponent } from './dcaa-compliance.component';

describe('DcaaComplianceComponent', () => {
  let component: DcaaComplianceComponent;
  let fixture: ComponentFixture<DcaaComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcaaComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcaaComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

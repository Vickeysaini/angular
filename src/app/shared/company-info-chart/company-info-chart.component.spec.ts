import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoChartComponent } from './company-info-chart.component';

describe('CompanyInfoChartComponent', () => {
  let component: CompanyInfoChartComponent;
  let fixture: ComponentFixture<CompanyInfoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInfoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

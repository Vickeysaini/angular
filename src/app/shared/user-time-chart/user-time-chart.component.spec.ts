import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeChartComponent } from './user-time-chart.component';

describe('UserTimeChartComponent', () => {
  let component: UserTimeChartComponent;
  let fixture: ComponentFixture<UserTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTimeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

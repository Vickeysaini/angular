import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeRulesComponent } from './overtime-rules.component';

describe('OvertimeRulesComponent', () => {
  let component: OvertimeRulesComponent;
  let fixture: ComponentFixture<OvertimeRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertimeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

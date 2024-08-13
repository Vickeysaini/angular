import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePreferencesComponent } from './expense-preferences.component';

describe('ExpensePreferencesComponent', () => {
  let component: ExpensePreferencesComponent;
  let fixture: ComponentFixture<ExpensePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensePreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

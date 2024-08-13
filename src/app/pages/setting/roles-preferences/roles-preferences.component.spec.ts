import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPreferencesComponent } from './roles-preferences.component';

describe('RolesPreferencesComponent', () => {
  let component: RolesPreferencesComponent;
  let fixture: ComponentFixture<RolesPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

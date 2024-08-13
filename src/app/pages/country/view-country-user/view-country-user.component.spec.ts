import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountryUserComponent } from './view-country-user.component';

describe('ViewCountryUserComponent', () => {
  let component: ViewCountryUserComponent;
  let fixture: ComponentFixture<ViewCountryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCountryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCountryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

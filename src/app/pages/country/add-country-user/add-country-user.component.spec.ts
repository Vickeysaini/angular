import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryUserComponent } from './add-country-user.component';

describe('AddCountryUserComponent', () => {
  let component: AddCountryUserComponent;
  let fixture: ComponentFixture<AddCountryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCountryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

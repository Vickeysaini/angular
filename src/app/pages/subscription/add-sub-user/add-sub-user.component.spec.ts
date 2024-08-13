import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubUserComponent } from './add-sub-user.component';

describe('AddSubUserComponent', () => {
  let component: AddSubUserComponent;
  let fixture: ComponentFixture<AddSubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

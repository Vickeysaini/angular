import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubUserComponent } from './view-sub-user.component';

describe('ViewSubUserComponent', () => {
  let component: ViewSubUserComponent;
  let fixture: ComponentFixture<ViewSubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

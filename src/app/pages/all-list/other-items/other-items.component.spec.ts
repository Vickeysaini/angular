import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherItemsComponent } from './other-items.component';

describe('OtherItemsComponent', () => {
  let component: OtherItemsComponent;
  let fixture: ComponentFixture<OtherItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

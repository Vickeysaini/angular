import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherItemsComponent } from './add-other-items.component';

describe('AddOtherItemsComponent', () => {
  let component: AddOtherItemsComponent;
  let fixture: ComponentFixture<AddOtherItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtherItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOtherItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

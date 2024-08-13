import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorToListComponent } from './add-vendor-to-list.component';

describe('AddVendorToListComponent', () => {
  let component: AddVendorToListComponent;
  let fixture: ComponentFixture<AddVendorToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorToListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVendorToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryUserComponent } from './add-category-user.component';

describe('AddCategoryUserComponent', () => {
  let component: AddCategoryUserComponent;
  let fixture: ComponentFixture<AddCategoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

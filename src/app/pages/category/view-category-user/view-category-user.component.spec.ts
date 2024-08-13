import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryUserComponent } from './view-category-user.component';

describe('ViewCategoryUserComponent', () => {
  let component: ViewCategoryUserComponent;
  let fixture: ComponentFixture<ViewCategoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

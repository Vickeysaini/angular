import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteDataComponent } from './edit-delete-data.component';

describe('EditDeleteDataComponent', () => {
  let component: EditDeleteDataComponent;
  let fixture: ComponentFixture<EditDeleteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

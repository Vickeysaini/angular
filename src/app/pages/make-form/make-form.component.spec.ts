import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFormComponent } from './make-form.component';

describe('MakeFormComponent', () => {
  let component: MakeFormComponent;
  let fixture: ComponentFixture<MakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

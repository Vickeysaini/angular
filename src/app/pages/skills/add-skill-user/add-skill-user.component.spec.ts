import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillUserComponent } from './add-skill-user.component';

describe('AddSkillUserComponent', () => {
  let component: AddSkillUserComponent;
  let fixture: ComponentFixture<AddSkillUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkillUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkillUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

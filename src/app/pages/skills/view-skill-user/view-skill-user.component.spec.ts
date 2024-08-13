import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSkillUserComponent } from './view-skill-user.component';

describe('ViewSkillUserComponent', () => {
  let component: ViewSkillUserComponent;
  let fixture: ComponentFixture<ViewSkillUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSkillUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSkillUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

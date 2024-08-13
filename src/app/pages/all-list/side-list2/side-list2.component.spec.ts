import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideList2Component } from './side-list2.component';

describe('SideList2Component', () => {
  let component: SideList2Component;
  let fixture: ComponentFixture<SideList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarliteComponent } from './navbarlite.component';

describe('NavbarliteComponent', () => {
  let component: NavbarliteComponent;
  let fixture: ComponentFixture<NavbarliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

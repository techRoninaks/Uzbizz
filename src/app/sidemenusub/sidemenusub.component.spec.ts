import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenusubComponent } from './sidemenusub.component';

describe('SidemenusubComponent', () => {
  let component: SidemenusubComponent;
  let fixture: ComponentFixture<SidemenusubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenusubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenusubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

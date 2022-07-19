import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarlogComponent } from './nav-barlog.component';

describe('NavBarlogComponent', () => {
  let component: NavBarlogComponent;
  let fixture: ComponentFixture<NavBarlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

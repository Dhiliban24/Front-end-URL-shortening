import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandURLComponent } from './expand-url.component';

describe('ExpandURLComponent', () => {
  let component: ExpandURLComponent;
  let fixture: ComponentFixture<ExpandURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

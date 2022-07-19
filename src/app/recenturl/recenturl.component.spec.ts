import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenturlComponent } from './recenturl.component';

describe('RecenturlComponent', () => {
  let component: RecenturlComponent;
  let fixture: ComponentFixture<RecenturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenturlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

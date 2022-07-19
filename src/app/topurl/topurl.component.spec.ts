import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopurlComponent } from './topurl.component';

describe('TopurlComponent', () => {
  let component: TopurlComponent;
  let fixture: ComponentFixture<TopurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

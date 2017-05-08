import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitCountDisplayComponent } from './hit-count-display.component';

describe('HitCountDisplayComponent', () => {
  let component: HitCountDisplayComponent;
  let fixture: ComponentFixture<HitCountDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitCountDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitCountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

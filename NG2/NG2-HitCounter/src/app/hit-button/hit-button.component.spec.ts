import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitButtonComponent } from './hit-button.component';

describe('HitButtonComponent', () => {
  let component: HitButtonComponent;
  let fixture: ComponentFixture<HitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

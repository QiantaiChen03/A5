import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinchComponent } from './pinch.component';

describe('PinchComponent', () => {
  let component: PinchComponent;
  let fixture: ComponentFixture<PinchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

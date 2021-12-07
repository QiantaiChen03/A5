import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOpenComponent } from './left-open.component';

describe('LeftOpenComponent', () => {
  let component: LeftOpenComponent;
  let fixture: ComponentFixture<LeftOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

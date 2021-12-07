import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFistComponent } from './left-fist.component';

describe('LeftFistComponent', () => {
  let component: LeftFistComponent;
  let fixture: ComponentFixture<LeftFistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftFistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

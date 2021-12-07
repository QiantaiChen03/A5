import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOpenComponent } from './right-open.component';

describe('RightOpenComponent', () => {
  let component: RightOpenComponent;
  let fixture: ComponentFixture<RightOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

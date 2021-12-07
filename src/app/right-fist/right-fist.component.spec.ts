import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFistComponent } from './right-fist.component';

describe('RightFistComponent', () => {
  let component: RightFistComponent;
  let fixture: ComponentFixture<RightFistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

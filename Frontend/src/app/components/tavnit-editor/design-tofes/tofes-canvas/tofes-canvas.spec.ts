import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofesCanvas } from './tofes-canvas';

describe('TofesCanvas', () => {
  let component: TofesCanvas;
  let fixture: ComponentFixture<TofesCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TofesCanvas],
    }).compileComponents();

    fixture = TestBed.createComponent(TofesCanvas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

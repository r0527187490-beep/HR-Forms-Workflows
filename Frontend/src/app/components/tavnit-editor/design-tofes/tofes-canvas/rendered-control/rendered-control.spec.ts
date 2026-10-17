import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderedControl } from './rendered-control';

describe('RenderedControl', () => {
  let component: RenderedControl;
  let fixture: ComponentFixture<RenderedControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderedControl],
    }).compileComponents();

    fixture = TestBed.createComponent(RenderedControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

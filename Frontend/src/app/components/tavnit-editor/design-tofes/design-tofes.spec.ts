import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTofes } from './design-tofes';

describe('DesignTofes', () => {
  let component: DesignTofes;
  let fixture: ComponentFixture<DesignTofes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTofes],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignTofes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

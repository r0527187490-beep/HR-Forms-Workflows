import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableField } from './draggable-field';

describe('DraggableField', () => {
  let component: DraggableField;
  let fixture: ComponentFixture<DraggableField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableField],
    }).compileComponents();

    fixture = TestBed.createComponent(DraggableField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

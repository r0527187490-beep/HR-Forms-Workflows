import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDragSidebar } from './build-drag-sidebar';

describe('BuildDragSidebar', () => {
  let component: BuildDragSidebar;
  let fixture: ComponentFixture<BuildDragSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildDragSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildDragSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

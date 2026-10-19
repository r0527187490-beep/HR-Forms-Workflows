import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavnitEditor } from './tavnit-editor';

describe('TavnitEditor', () => {
  let component: TavnitEditor;
  let fixture: ComponentFixture<TavnitEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TavnitEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavnitEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

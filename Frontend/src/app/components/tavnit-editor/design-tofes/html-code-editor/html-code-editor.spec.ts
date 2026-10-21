import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCodeEditor } from './html-code-editor';

describe('HtmlCodeEditor', () => {
  let component: HtmlCodeEditor;
  let fixture: ComponentFixture<HtmlCodeEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCodeEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCodeEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

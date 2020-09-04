import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizesEditorComponent } from './font-sizes-editor.component';

describe('FontSizesEditorComponent', () => {
  let component: FontSizesEditorComponent;
  let fixture: ComponentFixture<FontSizesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

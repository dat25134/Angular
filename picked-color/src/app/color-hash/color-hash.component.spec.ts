import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHashComponent } from './color-hash.component';

describe('ColorHashComponent', () => {
  let component: ColorHashComponent;
  let fixture: ComponentFixture<ColorHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

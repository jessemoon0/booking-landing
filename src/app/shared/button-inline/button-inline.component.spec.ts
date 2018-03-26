import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInlineComponent } from './button-inline.component';

describe('ButtonInlineComponent', () => {
  let component: ButtonInlineComponent;
  let fixture: ComponentFixture<ButtonInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

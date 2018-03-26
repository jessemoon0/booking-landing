import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChangeTextOnHoverComponent } from './button-change-text-on-hover.component';

describe('ButtonChangeTextOnHoverComponent', () => {
  let component: ButtonChangeTextOnHoverComponent;
  let fixture: ComponentFixture<ButtonChangeTextOnHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonChangeTextOnHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChangeTextOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

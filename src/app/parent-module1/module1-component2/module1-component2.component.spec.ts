import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Component2Component } from './module1-component2.component';

describe('Module1Component2Component', () => {
  let component: Module1Component2Component;
  let fixture: ComponentFixture<Module1Component2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module1Component2Component]
    });
    fixture = TestBed.createComponent(Module1Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

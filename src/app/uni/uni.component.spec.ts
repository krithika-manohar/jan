import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniComponent } from './uni.component';

describe('UniComponent', () => {
  let component: UniComponent;
  let fixture: ComponentFixture<UniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniComponent]
    });
    fixture = TestBed.createComponent(UniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

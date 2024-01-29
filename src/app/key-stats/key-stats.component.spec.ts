import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyStatsComponent } from './key-stats.component';

describe('KeyStatsComponent', () => {
  let component: KeyStatsComponent;
  let fixture: ComponentFixture<KeyStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyStatsComponent]
    });
    fixture = TestBed.createComponent(KeyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

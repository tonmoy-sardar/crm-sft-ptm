import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossAnalysisComponent } from './loss-analysis.component';

describe('LossAnalysisComponent', () => {
  let component: LossAnalysisComponent;
  let fixture: ComponentFixture<LossAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

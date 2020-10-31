import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityWonModalComponent } from './opportunity-won-modal.component';

describe('OpportunityWonModalComponent', () => {
  let component: OpportunityWonModalComponent;
  let fixture: ComponentFixture<OpportunityWonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityWonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityWonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailsModalComponent } from './opportunity-details-modal.component';

describe('OpportunityDetailsModalComponent', () => {
  let component: OpportunityDetailsModalComponent;
  let fixture: ComponentFixture<OpportunityDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

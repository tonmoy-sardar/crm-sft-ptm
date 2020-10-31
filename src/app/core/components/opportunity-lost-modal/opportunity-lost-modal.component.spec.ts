import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityLostModalComponent } from './opportunity-lost-modal.component';

describe('OpportunityLostModalComponent', () => {
  let component: OpportunityLostModalComponent;
  let fixture: ComponentFixture<OpportunityLostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityLostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityLostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

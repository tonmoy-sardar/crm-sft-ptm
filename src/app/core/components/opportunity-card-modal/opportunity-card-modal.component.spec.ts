import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCardModalComponent } from './opportunity-card-modal.component';

describe('OpportunityCardModalComponent', () => {
  let component: OpportunityCardModalComponent;
  let fixture: ComponentFixture<OpportunityCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

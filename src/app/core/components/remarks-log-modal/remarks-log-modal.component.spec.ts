import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksLogModalComponent } from './remarks-log-modal.component';

describe('RemarksLogModalComponent', () => {
  let component: RemarksLogModalComponent;
  let fixture: ComponentFixture<RemarksLogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksLogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

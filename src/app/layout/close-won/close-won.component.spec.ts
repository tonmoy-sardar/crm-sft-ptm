import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseWonComponent } from './close-won.component';

describe('CloseWonComponent', () => {
  let component: CloseWonComponent;
  let fixture: ComponentFixture<CloseWonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseWonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowTopNavComponent } from './below-top-nav.component';

describe('BelowTopNavComponent', () => {
  let component: BelowTopNavComponent;
  let fixture: ComponentFixture<BelowTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

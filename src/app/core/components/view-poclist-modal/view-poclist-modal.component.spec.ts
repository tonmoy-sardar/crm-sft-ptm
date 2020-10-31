import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoclistModalComponent } from './view-poclist-modal.component';

describe('ViewPoclistModalComponent', () => {
  let component: ViewPoclistModalComponent;
  let fixture: ComponentFixture<ViewPoclistModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPoclistModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPoclistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToPresalesModalComponent } from './add-to-presales-modal.component';

describe('AddToPresalesModalComponent', () => {
  let component: AddToPresalesModalComponent;
  let fixture: ComponentFixture<AddToPresalesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToPresalesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToPresalesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

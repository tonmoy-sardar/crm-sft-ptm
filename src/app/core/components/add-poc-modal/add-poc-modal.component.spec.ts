import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPocModalComponent } from './add-poc-modal.component';

describe('AddPocModalComponent', () => {
  let component: AddPocModalComponent;
  let fixture: ComponentFixture<AddPocModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPocModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

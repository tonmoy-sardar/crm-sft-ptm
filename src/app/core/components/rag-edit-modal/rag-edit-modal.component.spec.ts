import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RagEditModalComponent } from './rag-edit-modal.component';

describe('RagEditModalComponent', () => {
  let component: RagEditModalComponent;
  let fixture: ComponentFixture<RagEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RagEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RagEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

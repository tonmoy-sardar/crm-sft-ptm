import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTilesModalComponent } from './edit-tiles-modal.component';

describe('EditTilesModalComponent', () => {
  let component: EditTilesModalComponent;
  let fixture: ComponentFixture<EditTilesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTilesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTilesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

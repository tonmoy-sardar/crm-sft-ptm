import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineSnapshotComponent } from './pipeline-snapshot.component';

describe('PipelineSnapshotComponent', () => {
  let component: PipelineSnapshotComponent;
  let fixture: ComponentFixture<PipelineSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

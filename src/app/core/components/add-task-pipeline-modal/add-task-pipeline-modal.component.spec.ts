import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskPipelineModalComponent } from './add-task-pipeline-modal.component';

describe('AddTaskPipelineModalComponent', () => {
  let component: AddTaskPipelineModalComponent;
  let fixture: ComponentFixture<AddTaskPipelineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskPipelineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskPipelineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

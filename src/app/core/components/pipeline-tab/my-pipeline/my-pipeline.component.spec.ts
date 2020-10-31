import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipelineComponent } from './my-pipeline.component';

describe('MyPipelineComponent', () => {
  let component: MyPipelineComponent;
  let fixture: ComponentFixture<MyPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

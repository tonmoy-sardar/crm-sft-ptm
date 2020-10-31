import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';


@NgModule({
  declarations: [PipelineComponent],
  imports: [
    CoreModule,
    CommonModule,
    PipelineRoutingModule
  ]
})
export class PipelineModule { }

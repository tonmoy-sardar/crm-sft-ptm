import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LossAnalysisRoutingModule } from './loss-analysis-routing.module';
import { LossAnalysisComponent } from './loss-analysis.component';


@NgModule({
  declarations: [LossAnalysisComponent],
  imports: [
    CommonModule,
    LossAnalysisRoutingModule,
    CoreModule
  ]
})
export class LossAnalysisModule { }

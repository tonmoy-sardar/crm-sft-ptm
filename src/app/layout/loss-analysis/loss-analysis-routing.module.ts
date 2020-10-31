import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LossAnalysisComponent } from './loss-analysis.component';


const routes: Routes = [
  { path: '', component: LossAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossAnalysisRoutingModule { }

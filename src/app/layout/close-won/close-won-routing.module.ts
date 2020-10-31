import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloseWonComponent } from './close-won.component';


const routes: Routes = [
  { path: '', component: CloseWonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloseWonRoutingModule { }

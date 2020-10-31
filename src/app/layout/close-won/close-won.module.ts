import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { CloseWonRoutingModule } from './close-won-routing.module';
import { CloseWonComponent } from './close-won.component';


@NgModule({
  declarations: [CloseWonComponent],
  imports: [
    CommonModule,
    CloseWonRoutingModule,
    CoreModule
  ]
})
export class CloseWonModule { }

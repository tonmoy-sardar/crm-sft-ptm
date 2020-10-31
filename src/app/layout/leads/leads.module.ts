import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';

@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    CoreModule
  ]
})
export class LeadsModule { }

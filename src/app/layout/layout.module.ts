import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CoreModule } from '../core/core.module';

import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CoreModule,
    NgxPermissionsModule.forChild()
  ]
})
export class LayoutModule { }

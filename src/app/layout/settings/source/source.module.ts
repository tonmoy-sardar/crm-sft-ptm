import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SourceRoutingModule } from './source-routing.module';
import { SourceComponent } from './source.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [SourceComponent, AddComponent],
  imports: [
    CommonModule,
    SourceRoutingModule,
    CoreModule
  ],
  entryComponents: [ AddComponent ]
})
export class SourceModule { }

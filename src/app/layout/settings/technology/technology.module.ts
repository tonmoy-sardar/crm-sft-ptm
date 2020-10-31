import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [TechnologyComponent, AddComponent],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    CoreModule
  ],
  entryComponents: [ AddComponent ]
})
export class TechnologyModule { }

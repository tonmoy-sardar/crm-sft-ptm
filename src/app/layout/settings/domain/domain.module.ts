import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [DomainComponent, AddComponent],
  imports: [
    CommonModule,
    DomainRoutingModule,
    CoreModule
  ],
  entryComponents: [ AddComponent ]
})
export class DomainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [DepartmentComponent, AddComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    CoreModule
  ],
  entryComponents: [ AddComponent ]
})
export class DepartmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { ProjectFormRoutingModule } from './project-form-routing.module';
import { ProjectFormComponent } from './project-form.component';


@NgModule({
  declarations: [ProjectFormComponent],
  imports: [
    CoreModule,
    CommonModule,
    ProjectFormRoutingModule
  ]
})
export class ProjectFormModule { }

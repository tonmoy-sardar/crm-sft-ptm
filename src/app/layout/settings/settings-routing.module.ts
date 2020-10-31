import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { DepartmentModule } from './department/department.module';


const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)},
  { path: 'technology', loadChildren: () => import('./technology/technology.module').then(m => m.TechnologyModule)},
  { path: 'source', loadChildren: () => import('./source/source.module').then(m => m.SourceModule)},
  { path: 'domain', loadChildren: () => import('./domain/domain.module').then(m => m.DomainModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

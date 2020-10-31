import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'leads', pathMatch: 'full' },
      { path: '/', redirectTo: 'leads', pathMatch: 'full' },
      { path: 'leads',  loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
      { path: 'pipeline',  loadChildren: () => import('./pipeline/pipeline.module').then(m => m.PipelineModule) },
      { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
      { path: 'close_won', loadChildren: () => import('./close-won/close-won.module').then(m => m.CloseWonModule) },
      { path: 'loss_analysis', loadChildren: () => import('./loss-analysis/loss-analysis.module').then(m => m.LossAnalysisModule) },
      { path: 'project-form',  loadChildren: () => import('./project-form/project-form.module').then(m => m.ProjectFormModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

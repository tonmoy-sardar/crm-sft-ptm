import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { ListComponent } from './list/list.component';
import { OpportunityComponent } from './opportunity/opportunity.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'opportunity/:id', component: OpportunityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }

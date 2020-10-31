import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ListComponent } from './list/list.component';
import { OpportunityComponent } from './opportunity/opportunity.component';


@NgModule({
  declarations: [AccountsComponent, ListComponent, OpportunityComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    CoreModule
  ]
})
export class AccountsModule { }

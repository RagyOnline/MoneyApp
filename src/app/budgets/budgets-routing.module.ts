import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetsComponent } from './list/budgets.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';

const routes: Routes = [
  { path: '', component: BudgetsComponent },
  { path: 'edit/:ID', component: BudgetDetailsComponent },
  { path: 'new', component: BudgetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevExtremeModule, DxValidatorModule, DxValidationSummaryModule, DxDataGridModule } from 'devextreme-angular';
import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsComponent } from './list/budgets.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';


@NgModule({
  declarations: [
    BudgetsComponent,
    BudgetDetailsComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    DevExtremeModule
  ]
})
export class BudgetsModule { }

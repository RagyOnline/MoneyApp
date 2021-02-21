import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accounts, Budgets } from "../budgets";
import { BudgetsService } from '../budgets.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss']
})
export class BudgetDetailsComponent implements OnInit {
  budgetId: string = null;
  subscription: Subscription = new Subscription();
  typesLookup:any[] = [];
  budget: Budgets = new Budgets();
  originalBudget: Budgets = new Budgets();
  tempAccount:Accounts = new Accounts();
  constructor(private route: ActivatedRoute, private budgetsService: BudgetsService) {
    this.getRecords();
    this.typesLookup = this.budgetsService.typesLookups;
  }

  ngOnInit() {
  }
  getRecords() {
    this.subscription.add(this.route.params.subscribe(params => {
      this.budgetId = params['ID'];
      if (!this.budgetId || this.budgetId == "") {
        this.createNew();
      } else {
        this.getById();
      }
    }));
  }
  createNew() {

  }
  getById() {
    this.subscription.add(this.budgetsService.getBudgetId(this.budgetId)
      .subscribe(
        (value: any) => {
          if (value) {
            this.budget = value.data.budget;
            this.budget.accounts = this.budget.accounts.filter(x=> !x.deleted);
            this.originalBudget = _.cloneDeep(this.budget);
          }
        },
        error => {
          //this.alerts.goAlert('error', (error.Message) ? error.Message : "Server error", true, 0);
        }));
  }
  openAccount(){

  }
  addAccountPrepare(){
    this.tempAccount = new Accounts();
    $("#accountModal").modal("show");
  }
  saveAccountForBudget() {
    this.subscription.add(this.budgetsService.saveAccountForBudget(this.budgetId, this.tempAccount)
      .subscribe(
        (value: any) => {
          if (value) {
            this.budget.accounts.push(value.data.account);
            this.originalBudget.accounts.push(value.data.account);
            this.tempAccount = new Accounts();
            $("#accountModal").modal("hide");
            /*this.budget = value.data.budget;
            this.budget.accounts = this.budget.accounts.filter(x=> !x.deleted);
            this.originalBudget = _.cloneDeep(this.budget);*/
          }
        },
        error => {
          //this.alerts.goAlert('error', (error.Message) ? error.Message : "Server error", true, 0);
        }));
  }
  selectText(e) {
    $(e.element).find('input.dx-texteditor-input').first().select();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

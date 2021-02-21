import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";

export class AppSettings {
  static headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  static APIURL = "https://api.youneedabudget.com/v1/";
  static API_BudgetsList = AppSettings.APIURL + "budgets";
}

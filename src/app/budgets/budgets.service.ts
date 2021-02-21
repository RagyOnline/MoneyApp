import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AppSettings } from '../shared/app-settings';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Accounts } from './budgets';

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {
typesLookups:any[] =[
  { name:"checking"},
  { name:"savings"},
  { name:"creditCard"},
  { name:"cash"},
  { name:"lineOfCredit"},
  { name:"otherAsset"},
  { name:"otherLiability"},
  { name:"mortgage"},
  { name:"carLoan"},
  { name:"studentLoan"},
  { name:"personalLoan"},
  { name:"consumerLoan"},
  { name:"medicalDebt"},
  { name:"otherDebt"}
];
  constructor(private http: HttpClient) { }
  getBudgetId(ID: string) {
    const url = `${AppSettings.API_BudgetsList}/` + ID;
    return this.http.get(url, { headers: AppSettings.headers })
      .pipe(catchError(this.handleError));
  }
  saveAccountForBudget(ID: string, account:Accounts) {
    const url = `${AppSettings.API_BudgetsList}/` + ID + `/accounts`;
    var newAccount = {
      account: account
    }
    return this.http.post(url, JSON.stringify(newAccount), { headers: AppSettings.headers })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return Observable.throw(error.error);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxDataGridComponent} from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { AppSettings } from "../../shared/app-settings";
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  Budgets: any = {};
  headers = AppSettings.headers;
  @ViewChild(DxDataGridComponent, {static:true} ) grid: DxDataGridComponent;
  constructor(private titleService: Title, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.getBudgetsList();
  }
  getBudgetsList() {
    var url = AppSettings.API_BudgetsList;
    var that = this;
    this.Budgets.store = new CustomStore({
      load: function (loadOptions) {
        return that.http.get(url, { headers: that.headers }).toPromise()
          .then((response: any) => {
            var json = response;
            that.titleService.setTitle("Budgets");
            return {
              data: json.data.budgets,
              totalCount: json.TotalCount
            }
          })
          .catch(error => {
            throw error;
          });
      }
    });
  }
  formatCells(e) {
    /*if (e.rowType == 'data') {
      if (e.column.dataType == 'date' && e.value != null) {
        //e.cellElement.text(AppSettings.formatDate(e.displayValue));
      } else if (e.column.dataType == 'number' && e.value != null) {
        //e.cellElement.text(this.displayFormattedCurrency(e.displayValue, e.column.dataField, e));
      }
    }*/
  }
  openBudget(e) {
      if (e.rowType == "data") {
        this.router.navigate(['budgets/edit/', e.data.id]);
      }
    }
}

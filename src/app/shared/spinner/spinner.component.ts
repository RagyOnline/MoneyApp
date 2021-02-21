import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import {SpinnerService } from "./spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit {
  public isSpinnerVisible: Subject<boolean> = this.spinnerLoader.isLoading;
  constructor(private spinnerLoader: SpinnerService) { }

  ngOnInit() {
  }

}

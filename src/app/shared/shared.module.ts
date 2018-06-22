import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartListComponent } from "./chart-list/chart-list.component";

import {
  // IgniteUIModule,
  IgSpreadsheetComponent,
  IgGridComponent,
  IgDataChartComponent,
  IgniteUIModule
} from "igniteui-angular-wrappers";

import { IgxCardModule } from "igniteui-angular/main";

@NgModule({
  imports: [
    CommonModule,
    IgxCardModule,
    IgSpreadsheetComponent,
    IgGridComponent,
    IgDataChartComponent,
    IgniteUIModule
  ],
  exports: [
    ChartListComponent,
    IgxCardModule,
    IgSpreadsheetComponent,
    IgGridComponent,
    IgDataChartComponent,
    IgniteUIModule
  ],
  declarations: [ChartListComponent]
})
export class SharedModule {}

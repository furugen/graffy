import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartListComponent } from "./chart-list/chart-list.component";

import { IgniteUIModule } from "igniteui-angular-wrappers";

import { IgxCardModule } from "igniteui-angular/main";

@NgModule({
  imports: [CommonModule, IgxCardModule, IgniteUIModule],
  exports: [ChartListComponent, IgxCardModule, IgniteUIModule],
  declarations: [ChartListComponent]
})
export class SharedModule {}

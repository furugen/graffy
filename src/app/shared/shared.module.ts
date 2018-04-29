import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartListComponent } from './chart-list/chart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChartListComponent
  ],
  declarations: [ChartListComponent]
})
export class SharedModule { }

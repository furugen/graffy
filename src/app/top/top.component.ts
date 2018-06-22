import { Component, OnInit } from "@angular/core";
import { ChartData } from "../shared/chart-list/chart-data";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.css"]
})
export class TopComponent implements OnInit {
  selectedChartData: ChartData;
  public chartSetting = {
    title: "",
    xLabel: "",
    yLabel: ""
  };
  scriptText: string;

  constructor() {}

  ngOnInit() {}

  onChartSelected(chartData: ChartData) {
    this.selectedChartData = chartData;
    this.updateScriptText();
  }

  updateScriptText(): void {
    this.scriptText =
      "<div id='theChart' style='width:800px;height:400px'></div>" +
      "<script src='http://localhost:2342/api/values?" +
      "chartType=" +
      this.selectedChartData.chartType +
      "&title=" +
      this.chartSetting.title +
      "&yLabel=" +
      this.chartSetting.yLabel +
      "&xLabel=" +
      this.chartSetting.xLabel +
      "'></script>";
  }
}

import { Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ChartData } from "./chart-data";

@Component({
  selector: "app-chart-list",
  templateUrl: "./chart-list.component.html",
  styleUrls: ["./chart-list.component.css"]
})
export class ChartListComponent implements OnInit {
  private data: any;
  charts: ChartData[];
  selectChart: ChartData;
  title: string;

  @Output() selectChangedEvent = new EventEmitter<ChartData>();

  constructor() {
    this.title = "備品";
    this.data = [
      {
        CountryName: "China",
        Pop1995: 1216,
        Pop2005: 1297,
        Pop2015: 1361,
        Pop2025: 1394
      },
      {
        CountryName: "India",
        Pop1995: 920,
        Pop2005: 1090,
        Pop2015: 1251,
        Pop2025: 1396
      },
      {
        CountryName: "United States",
        Pop1995: 266,
        Pop2005: 295,
        Pop2015: 322,
        Pop2025: 351
      },
      {
        CountryName: "Indonesia",
        Pop1995: 197,
        Pop2005: 229,
        Pop2015: 256,
        Pop2025: 277
      },
      {
        CountryName: "Brazil",
        Pop1995: 161,
        Pop2005: 186,
        Pop2015: 204,
        Pop2025: 218
      }
    ];

    this.charts = new Array();
    this.charts.push(this.createChartData("A", "line"));
    this.charts.push(this.createChartData("A", "column"));
    this.charts.push(this.createChartData("A", "point"));
    this.charts.push(this.createChartData("A", "area"));
    this.charts.push(this.createChartData("A", "spline"));
    this.charts.push(this.createChartData("A", "splineArea"));
    this.charts.push(this.createChartData("A", "stepLine"));
    this.charts.push(this.createChartData("A", "stepArea"));
  }

  onSelect(chart: ChartData): void {
    this.selectChart = chart;
    this.selectChangedEvent.emit(this.selectChart);
  }

  createChartData(title: string, chartType: string): ChartData {
    const chartData = new ChartData({
      title: title,
      chartType: chartType,
      chartOptions: this.createChartOption(title, chartType)
    });

    return chartData;
  }

  createChartOption(title: string, chartType: string): IgDataChart {
    let isColumnChart = false;
    if (chartType.indexOf("Column") >= 0) {
      isColumnChart = true;
    }

    const chartOptions = {
      width: "120px",
      height: "120px",
      dataSource: this.data,
      leftMargin: 10,
      axes: [
        {
          name: "NameAxis",
          type: "categoryX",
          label: "CountryName",
          labelVisibility: "collapsed"
        },
        {
          name: "PopulationAxis",
          type: "numericY",
          minimumvalue: 0,
          labelVisibility: "collapsed"
        }
      ],
      series: [
        {
          name: "2015Population",
          type: chartType,
          xAxis: "NameAxis",
          yAxis: "PopulationAxis",
          valueMemberPath: "Pop2015"
        }
      ]
    };

    return chartOptions;
  }

  ngOnInit() {}
}

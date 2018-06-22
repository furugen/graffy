import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.css"]
})
export class SettingComponent implements OnInit {
  public localData = [
    {
      title: "AAa",
      xLabel: "BBBB",
      yLabel: "CCC"
    }
  ];

  public jsonDataStr = '[{ "CountryName" : "Jas1"},{ "CountryName" : "Jas"}]';
  public jsonData = JSON.parse(this.jsonDataStr);

  public chartOptions = {
    width: "520px",
    height: "520px",
    dataSource: this.jsonData,
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
        type: "line",
        xAxis: "NameAxis",
        yAxis: "PopulationAxis",
        valueMemberPath: "Pop2015"
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  refJsonData(): void {
    this.jsonData = JSON.parse(this.jsonDataStr);
    this.chartOptions.dataSource = this.jsonData;
  }
}

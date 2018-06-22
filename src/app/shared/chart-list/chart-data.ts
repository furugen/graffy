export class ChartData {
  title: string;
  chartType: string;
  chartOptions: IgDataChart;

  getChartType(): string {
    return this.chartType;
  }

  constructor(values: any) {
    this.title = values.title;
    this.chartType = values.chartType;
    this.chartOptions = values.chartOptions;
  }
}

export class ChartData {
  title: string;
  chartOptions: IgDataChart;

  constructor(values: any) {
    this.title = values.title;
    this.chartOptions = values.chartOptions;
  }
}

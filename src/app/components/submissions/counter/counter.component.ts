import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  pending: number = 62;
  accepted: number = 28;
  rejected: number = 10;

  ngOnInit(): void {
    this.setChart(this.pending, '#3f51b5')
  }

  getpending() {
    this.setChart(this.pending, '#3f51b5')
  }

  getAccepted() {
    this.setChart(this.accepted, "#ff4081")
  }

  getRejected() {
    this.setChart(this.rejected, '#f44336')
  }

  setChart(data: number, color: string) {
    this.chartOptions = {
      series: [data],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        colors: [color],
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: []
    };
  }
}

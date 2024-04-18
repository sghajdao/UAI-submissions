import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-accepted-chart',
  templateUrl: './accepted-chart.component.html',
  styleUrl: './accepted-chart.component.css'
})
export class AcceptedChartComponent implements OnInit {
  constructor() {}

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Output() rejected = new EventEmitter<boolean>(false)

  ngOnInit(): void {
    this.setChart()
  }

  toRejected() {
    this.rejected.emit(true)
  }

  setChart() {
    this.chartOptions = {
      series: [
        {
          name: "Accepted",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        // colors: ["#ff4081"]
      },
      title: {
        text: "Accepted submissions by month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
  }
}

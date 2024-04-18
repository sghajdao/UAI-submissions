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
  selector: 'app-rejected-chart',
  templateUrl: './rejected-chart.component.html',
  styleUrl: './rejected-chart.component.css'
})
export class RejectedChartComponent implements OnInit {

  constructor() {}

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Output() accepted = new EventEmitter<boolean>(false)

  ngOnInit(): void {
    this.setChart()
  }

  toAccepted() {
    this.accepted.emit(true)
  }

  setChart() {
    this.chartOptions = {
      series: [
        {
          name: "Rejects",
          data: [10, 31, 35, 31, 30, 22, 19, 21, 7],
          color: '#f44336'
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
        colors: ['#f44336'] // Specify the color for the line series
      },
      title: {
        text: "Rejected submissions by month",
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
        ],
      }
    };
  }
}

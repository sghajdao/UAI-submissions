import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";
import { Submissions } from '../../../models/submissions';

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
export class CounterComponent implements OnChanges {
  constructor() {}

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;
  @Input() students?: Submissions[]
  @Output() filter = new EventEmitter<string>()
  search: string = ''
  searchList: string[] = []

  pending: number = 62;
  accepted: number = 28;
  rejected: number = 10;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students)
      this.setChart(this.pending, '#3f51b5')
  }

  onSearch() {
    this.searchList = []
    if (this.search.length && !Number.isNaN(+this.search)) {
      this.filter.emit(this.search)
      this.search = ''
    }
    else {
      this.filter.emit('-1')
      this.search = ''
    }
  }

  getOptions() {
    this.searchList = []
    console.log(this.search)
    if (this.search && this.students) {
      for (let item of this.students) {
        if (item.stud_id.toString().startsWith(this.search) && !this.searchList.includes(item.stud_id.toString()))
          this.searchList.push(item.stud_id.toString())
      }
    }
  }

  setChart(data: number, color: string) {
    this.chartOptions = {
      series: [data],
      chart: {
        type: "radialBar",
        offsetY: -20,
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
              show: true
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
              show: false // show the percentage
            },
            total: {
              label: data + "% " + "from 50",
              show:true,
              fontSize: '22px',
              color: color
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

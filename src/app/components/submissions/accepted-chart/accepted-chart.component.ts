import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexPlotOptions,
  ApexAnnotations,
  ApexFill,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { Cus_special_request_sub } from '../../../models/cus_special_request_sub';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-accepted-chart',
  templateUrl: './accepted-chart.component.html',
  styleUrl: './accepted-chart.component.css'
})
export class AcceptedChartComponent implements OnChanges {
  constructor() {}

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Input() students?: Cus_special_request_sub[]
  @Output() rejected = new EventEmitter<boolean>(false)

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students && this.students.length) {
      this.setChart(this.students)
    }
  }

  toRejected() {
    this.rejected.emit(true)
  }

  setChart(list: Cus_special_request_sub[]) {
    let schools: string[] = []
    let subs: number[] = []
    for (let student of list) {
      if (student.school && !schools.includes(student.school) && student.submission_Status.startsWith('Approved'))
        schools.push(student.school)
    }
    for (let school of schools) {
      subs.push(list.filter(item => item.school && item.school.startsWith(school)).length)
    }
    this.chartOptions = {
      series: [
        {
          name: "Students",
          data: subs
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      title: {
        text: "Accepted students"
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: schools,
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "Students"
        },
        labels: {
          formatter: function (value) {
            if (value != Math.floor(value))
              return ''
            return value.toString()
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AcceptedChartComponent } from './accepted-chart/accepted-chart.component';
import { CounterComponent } from './counter/counter.component';
import { RejectedChartComponent } from './rejected-chart/rejected-chart.component';
import { AcceptedListComponent } from './accepted-list/accepted-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SubmissionsComponent,
    AcceptedChartComponent,
    CounterComponent,
    RejectedChartComponent,
    AcceptedListComponent,
    RejectedListComponent,
    PendingListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    MatChipsModule,MatButtonModule, MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ]
})
export class SubmissionsModule { }

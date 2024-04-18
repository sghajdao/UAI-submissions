import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedChartComponent } from './rejected-chart.component';

describe('RejectedChartComponent', () => {
  let component: RejectedChartComponent;
  let fixture: ComponentFixture<RejectedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectedChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

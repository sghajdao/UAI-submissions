import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedChartComponent } from './accepted-chart.component';

describe('AcceptedChartComponent', () => {
  let component: AcceptedChartComponent;
  let fixture: ComponentFixture<AcceptedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceptedChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedListComponent } from './accepted-list.component';

describe('AcceptedListComponent', () => {
  let component: AcceptedListComponent;
  let fixture: ComponentFixture<AcceptedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceptedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

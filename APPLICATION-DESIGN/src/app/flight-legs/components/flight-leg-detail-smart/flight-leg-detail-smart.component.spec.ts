import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLegDetailSmartComponent } from './flight-leg-detail-smart.component';

describe('FlightLegDetailSmartComponent', () => {
  let component: FlightLegDetailSmartComponent;
  let fixture: ComponentFixture<FlightLegDetailSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLegDetailSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLegDetailSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

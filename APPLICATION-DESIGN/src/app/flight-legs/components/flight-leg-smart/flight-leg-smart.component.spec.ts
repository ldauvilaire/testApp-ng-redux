import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLegSmartComponent } from './flight-leg-smart.component';

describe('FlightLegSmartComponent', () => {
  let component: FlightLegSmartComponent;
  let fixture: ComponentFixture<FlightLegSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLegSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLegSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
